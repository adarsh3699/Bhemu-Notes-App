import { auth, database } from './firebaseConfig';
import AsyncStorage from '@react-native-async-storage/async-storage';

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
	} else if (!netInfo.isConnected && netInfo.isConnected != null) {
		console.log('getUserAllNoteData:- Please check your internet connection');
		// setIsFetchNotLoading(false);
		// return handleMsgShown('Please check your internet connection');
	}

	const getDataQuery = query(colRef, where('userId', '==', userId), orderBy('updatedOn', 'desc')); // orderBy('name', 'desc || ase')

	setIsFetchNotLoading(true);
	onSnapshot(
		getDataQuery,
		async (snapshot) => {
			let allNoteData = [];

			snapshot.docs.forEach((doc, index) => {
				allNoteData.push({
					index,
					noteId: doc.id,
					noteData: decryptText(doc.data().noteData),
					noteText: decryptText(doc.data().noteText),
					noteTitle: decryptText(doc.data().noteTitle),
					isLocked: doc.data().isLocked,
					updatedOn: doc.data().updatedOn,
					noteSharedUsers: doc.data().noteSharedUsers || [],
					isNoteSharedWithAll: doc.data().isNoteSharedWithAll,
				});
			});
			setAllNotes(allNoteData);

			const encryptNotesData = JSON.stringify(allNoteData);
			await AsyncStorage.setItem('note_data', encryptNotesData);
			setIsFetchNotLoading(false);
		},
		(err) => {
			setIsFetchNotLoading(false);
			console.log('getUserAllNoteData', err);
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

// function addNewNote(upcomingData, setMsg, setIsApiLoading, isSharedNoteType) {
// 	const userId = auth?.currentUser?.uid;
// 	const { newNoteText, newNoteData } = toSendNoteData;
// 	if (!userId || !newNoteText || !newNoteData) return setMsg('addNewNote: Please Provide all details');
// 	setIsApiLoading(true);
// 	const encryptNoteText = encryptText(newNoteText?.trim());
// 	const encryptNoteData = encryptText(newNoteData);
// 	const toAdd = {
// 		userId,
// 		noteTitle: encryptNoteText,
// 		noteText: encryptNoteText,
// 		noteData: encryptNoteData,
// 		isNoteSharedWithAll: false,
// 		createdAt: serverTimestamp(),
// 		updatedOn: serverTimestamp(),
// 	};
// 	addDoc(colRef, toAdd)
// 		.then((e) => {
// 			if (isSharedNoteType) window.location.href = '/';
// 		})
// 		.catch((err) => {
// 			setMsg(err.code);
// 			console.log('addNewNote:', err);
// 		})
// 		.finally(() => {
// 			setIsApiLoading(false);
// 		});
// }

//delete Notes
function deleteData(noteId, setIsApiLoading, setMsg) {
	if (!noteId) return setMsg('Please Provide all details');
	const docRef = doc(database, 'user_notes', noteId);
	setIsApiLoading(true);
	deleteDoc(docRef)
		.then(() => {
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
