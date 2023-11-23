import React, { useCallback, useEffect, useState, useRef } from 'react';

import { HomeScreenStyle } from '../styles/HomeScreenStyle';
import { handleSignOut } from '../firebase/auth';
import { getUserAllNoteData, addNewNote, updateDocument } from '../firebase/notes';

import NavBar from '../components/homeScreen/navBar/NavBar';
import NoteListBox from '../components/homeScreen/noteListBox/NoteListBox';
import NoteContentModal from '../components/homeScreen/noteContentModal/NoteContentModal';

import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNetInfo } from '@react-native-community/netinfo';

let localStorageNotesData;
try {
	AsyncStorage.getItem('note_data', (err, result) => {
		localStorageNotesData = JSON.parse(result);
	});
} catch (error) {
	console.log('localStorageNotesData', error);
}

const HomeScreen = ({ navigation }) => {
	const netInfo = useNetInfo();
	const [message, setMessage] = useState({ text: '', type: '' });
	const [allNotes, setAllNotes] = useState(localStorageNotesData || []);
	const [addNoteBoxInput, setAddNoteBoxInput] = useState('');

	// const [currentNoteIndex, setCurrentNoteIndex] = useState(0);
	const [openedNoteId, setOpenedtNoteId] = useState('');
	const [openedNoteData, setOpenedNoteData] = useState({});

	const [isNotesModalOpen, setIsNotesModalOpen] = useState(false);
	const [isConfirmationDialogOpen, setIsConfirmationDialogOpen] = useState(false);
	// const [isShareDialogBoxOpen, setIsShareDialogBoxOpen] = useState(false);

	const [isFetchNotLoading, setIsFetchNotLoading] = useState(true);
	const [isSaveBtnLoading, setIsSaveBtnLoading] = useState(false);
	const [isApiLoading, setIsApiLoading] = useState(false);
	const [focusedInput, setfocusedInput] = useState(null);
	const todoRef = useRef();
	const lastTextBoxRef = useRef();

	const handleMsgShown = useCallback((msgText, type) => {
		let msgType = type || 'error';
		if (msgText) {
			setMessage({ text: msgText, type: msgType });
			setTimeout(() => {
				setMessage({ text: '', type: '' });
			}, 2500);
		} else {
			console.log('handleMsgShown:', 'Please Provide Text Msg');
		}
	}, []);

	// fetch All noteData
	useEffect(() => {
		getUserAllNoteData(setAllNotes, setIsFetchNotLoading, handleMsgShown, netInfo);
	}, [handleMsgShown, netInfo]);

	const handleNoteOpening = useCallback(
		(index, openedNote) => {
			if (openedNote?.noteId) setOpenedtNoteId(openedNote?.noteId);
			setIsNotesModalOpen(true);
			setOpenedNoteData(openedNote);
			// setCurrentNoteIndex(index);
		},
		[setOpenedNoteData, setIsNotesModalOpen]
	);

	const handleNoteClosing = useCallback(() => {
		setIsNotesModalOpen(false);
		setOpenedNoteData({});
		setOpenedtNoteId('');
	}, [setIsNotesModalOpen, setOpenedNoteData]);

	//add Note Function
	const addNotes = useCallback(() => {
		setIsApiLoading(true);
		const notesTitle = addNoteBoxInput ? addNoteBoxInput : 'Enter Notes Title';
		const noteData = [{ element: '', type: 'note' }];

		const toSendNoteData = { notesTitle, noteData };
		handleNoteOpening(0, toSendNoteData);
		addNewNote(toSendNoteData, setOpenedtNoteId, handleMsgShown, setIsApiLoading);
		setAddNoteBoxInput('');
	}, [handleNoteOpening, handleMsgShown, addNoteBoxInput]);

	//handle note or todo save
	// const handleSaveBtnClick = useCallback(async () => {
	// 	setIsSaveBtnLoading(true);
	// 	const toSendData = {
	// 		noteId: myNoteId,
	// 		notesTitle: document.getElementById('titleTextBox')?.innerText,
	// 		noteData: openedNoteData,
	// 	};
	// 	updateDocument(toSendData, setIsSaveBtnLoading, setIsNotesModalOpen, handleMsgShown);
	// }, [handleMsgShown, myNoteId, openedNoteData]);

	return (
		<SafeAreaView style={{ backgroundColor: '#151515' }}>
			<ScrollView
				contentContainerStyle={HomeScreenStyle.background}
				stickyHeaderIndices={[1]}
				showsVerticalScrollIndicator={false}
			>
				<NavBar addNotes={addNotes} />
				<View style={HomeScreenStyle.textInputBox}>
					<TextInput
						style={HomeScreenStyle.textInput}
						placeholder="Take a note..."
						value={addNoteBoxInput}
						onChangeText={(text) => setAddNoteBoxInput(text)}
						onSubmitEditing={addNotes}
					/>
				</View>
				{isFetchNotLoading && <ActivityIndicator style={HomeScreenStyle.loader} animating={true} size={30} />}

				{allNotes.map((note, index) => {
					return (
						<NoteListBox
							key={index}
							index={index}
							openedNote={note}
							handleNoteOpening={handleNoteOpening}
						/>
					);
				})}
				{isNotesModalOpen && (
					<NoteContentModal
						isNotesModalOpen={isNotesModalOpen}
						handleNoteClosing={handleNoteClosing}
						// openedNoteId={openedNoteId}
						openedNoteData={openedNoteData}
						isSaveBtnLoading={isSaveBtnLoading}
						// toggleShareDialogBox={toggleShareDialogBox}
						// handleSaveBtnClick={handleSaveBtnClick}
						// handleDeleteBtnClick={handleDeleteBtnClick}
						// handleNoteTextChange={handleNoteTextChange}
						// handleCheckboxClick={handleCheckboxClick}
						// handleDeleteToDoBtnClick={handleDeleteToDoBtnClick}
						// handleAddTodoBtn={handleAddTodoBtn}
						// handleAddShareNoteUser={handleAddShareNoteUser}
						// handleTodoEnterClick={handleTodoEnterClick}
						// handleBackspaceClick={handleBackspaceClick}
						// todoRef={todoRef}
						// focusedInput={focusedInput}
						// setfocusedInput={setfocusedInput}
						// lastTextBoxRef={lastTextBoxRef}
					/>
				)}

				<TouchableOpacity onPress={handleSignOut}>
					<Text>Logout</Text>
				</TouchableOpacity>
				<TouchableOpacity onPress={() => navigation.navigate('Settings')}>
					<Text>Back To SettingScreen</Text>
				</TouchableOpacity>
			</ScrollView>
		</SafeAreaView>
	);
};

export default HomeScreen;
