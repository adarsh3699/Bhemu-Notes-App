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

function getUserAllNoteData(setAllNotes, setIsFetchNotLoading, handleMsgShown, netInfo) {
	let userId = auth?.currentUser?.uid;
	if (!userId) {
		console.log('getUserAllNoteData:- Please Provide userId');
		return handleMsgShown('Please Provide all details');
	} else if (!netInfo.isConnected) {
		console.log('getUserAllNoteData:- Please check your internet connection');
		// setIsFetchNotLoading(false);
		return handleMsgShown('Please check your internet connection');
	}

	const getDataQuery = query(colRef, where('userId', '==', userId), orderBy('updatedOn', 'desc')); // orderBy('name', 'desc || ase')
	setIsFetchNotLoading(true);
	onSnapshot(
		colRef,
		async () => {
			await getDocs(getDataQuery)
				.then(async (snapshot) => {
					let allNoteData = [];
					snapshot.docs.forEach((doc) => {
						allNoteData.push({
							noteId: doc.id,
							notesTitle: decryptText(doc.data()?.notesTitle),
							noteData: JSON.parse(decryptText(doc?.data()?.noteData)),
							updatedOn: doc.data()?.updatedOn,
							noteSharedUsers: doc.data()?.noteSharedUsers || [],
							isNoteSharedWithAll: doc.data()?.isNoteSharedWithAll,
						});
					});
					setAllNotes(allNoteData);
					const encryptNotesData = JSON.stringify(allNoteData);
					await AsyncStorage.setItem('note_data', encryptNotesData);
					setIsFetchNotLoading(false);
				})
				.catch((err) => {
					setIsFetchNotLoading(false);
					console.log('getUserAllNoteData_1', err);
					handleMsgShown(err.message);
				});
		},
		(err) => {
			setIsFetchNotLoading(false);
			console.log('getUserAllNoteData_2', err);
			handleMsgShown(err.message);
		}
	);
}

//Add Notes
function addNewNote(upcomingData, setOpenedtNoteId, setMsg, setIsApiLoading) {
	const userId = auth?.currentUser?.uid;
	const { notesTitle, noteData } = upcomingData;
	const encryptTitle = encryptText(notesTitle ? notesTitle?.trim() : notesTitle);
	const stringifyedNoteData = JSON.stringify(noteData);
	const encryptNoteData = encryptText(stringifyedNoteData);

	if (!userId) {
		setMsg('Please Provide all details');
		return console.log('addNewNote:- Please Provide all details');
	}

	addDoc(colRef, {
		userId,
		notesTitle: encryptTitle,
		noteData: encryptNoteData,
		createdAt: serverTimestamp(),
		updatedOn: serverTimestamp(),
	})
		.then((e) => {
			setOpenedtNoteId(e?.id);
			setIsApiLoading(false);
		})
		.catch((err) => {
			setIsApiLoading(false);
			setMsg(err.code);
			console.log('addNewNote', err);
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
