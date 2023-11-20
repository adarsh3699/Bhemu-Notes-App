import { auth, database } from './firebaseConfig';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { getAuth } from 'firebase/auth';
import { encryptText, decryptText } from '../utils';

import {
	collection,
	onSnapshot,
	getDocs,
	addDoc,
	deleteDoc,
	updateDoc,
	doc,
	query,
	where,
	serverTimestamp,
	orderBy,
} from 'firebase/firestore';

// collection ref
const colRef = collection(database, 'user_notes');

let userId;
AsyncStorage.getItem('user_details', (err, result) => {
	userId = JSON.parse(result)?.userId;
});

function getUserAllNoteData(setAllNotes, setIsFetchNotLoading, setMsg) {
	const getDataQuery = query(colRef, where('userId', '==', userId), orderBy('updatedOn', 'desc')); // orderBy('name', 'desc || ase')
	setIsFetchNotLoading(true);
	onSnapshot(
		colRef,
		async (realSnapshot) => {
			await getDocs(getDataQuery)
				.then(async (snapshot) => {
					let noteData = [];
					snapshot.docs.forEach((doc) => {
						noteData.push({
							notesId: doc.id,
							notesTitle: decryptText(doc.data().notesTitle),
							noteData: JSON.parse(decryptText(doc.data().noteData)),
							updatedOn: doc.data().updatedOn,
							noteSharedUsers: doc.data().noteSharedUsers || [],
							isNoteSharedWithAll: doc.data().isNoteSharedWithAll,
						});
					});
					setAllNotes(noteData);

					const encryptNotesData = JSON.stringify(noteData);
					await AsyncStorage.setItem('note_data', encryptNotesData);
					setIsFetchNotLoading(false);
				})
				.catch((err) => {
					setIsFetchNotLoading(false);
					console.log(1, err.message);
					setMsg(err.code);
				});
		},
		(err) => {
			setIsFetchNotLoading(false);
			console.log(2, err);
			setMsg(err.code);
		}
	);
}

//Add Notes
function addNewNote(upcomingData, setMyNotesId, setMsg, setIsApiLoading) {
	const userId = auth?.currentUser?.uid;
	const { newNotesTitle, newNoteData } = upcomingData;
	const encryptTitle = encryptText(newNotesTitle ? newNotesTitle?.trim() : newNotesTitle);
	const stringifyedNoteData = JSON.stringify(newNoteData);
	const encryptNoteData = encryptText(stringifyedNoteData);

	addDoc(colRef, {
		userId,
		notesTitle: encryptTitle,
		noteData: encryptNoteData,
		createdAt: serverTimestamp(),
		updatedOn: serverTimestamp(),
	})
		.then((e) => {
			setMyNotesId(e?.id);
			setIsApiLoading(false);
		})
		.catch((err) => {
			setIsApiLoading(false);
			setMsg(err.code);
			console.log(err);
		});
}

//delete Notes
function deleteData(noteId, setIsApiLoading, setMsg) {
	if (!noteId) return setMsg('Please Provide all details');
	const docRef = doc(database, 'user_notes', noteId);
	setIsApiLoading(true);
	deleteDoc(docRef)
		.then((e) => {
			setIsApiLoading(false);
		})
		.catch((err) => {
			console.log(err.message);
			setMsg(err.code);
		});
}

//update notes
function updateDocument(upcomingData, setIsSaveBtnLoading, setIsNotesModalOpen, setMsg) {
	const { noteId, notesTitle, noteData } = upcomingData;
	if (!noteId || !notesTitle || !noteData) {
		setMsg('Please Provide all details (noteId, notesTitle, noteData)');
		setIsSaveBtnLoading(false);
		return;
	}
	const encryptTitle = encryptText(notesTitle ? notesTitle?.trim() : notesTitle);
	const stringifyedNoteData = JSON.stringify(noteData);
	const encryptNoteData = encryptText(stringifyedNoteData);

	const docRef = doc(database, 'user_notes', noteId);

	updateDoc(docRef, {
		notesTitle: encryptTitle,
		noteData: encryptNoteData,
		updatedOn: serverTimestamp(),
	})
		.then(() => {
			setIsSaveBtnLoading(false);
		})
		.catch((err) => {
			setIsNotesModalOpen(false);
			setIsSaveBtnLoading(false);
			console.log(err.message);
		});
}

export { getUserAllNoteData, addNewNote, deleteData, updateDocument };
