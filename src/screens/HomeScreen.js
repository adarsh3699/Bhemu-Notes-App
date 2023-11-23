import React, { useCallback, useEffect, useState } from 'react';

import { handleSignOut } from '../firebase/auth';
import { getUserAllNoteData } from '../firebase/notes';
import { HomeScreenStyle } from '../styles/HomeScreenStyle';

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

	const [currentNoteIndex, setCurrentNoteIndex] = useState(0);
	const [myNotesId, setMyNotesId] = useState('');
	const [notesTitle, setNotesTitle] = useState('');
	const [openedNoteData, setOpenedNoteData] = useState([]);
	const [noteSharedUsers, setNoteSharedUsers] = useState([]);

	const [isNotesModalOpen, setIsNotesModalOpen] = useState(false);
	const [isNoteSharedWithAll, setIsNoteSharedWithAll] = useState(false);

	const [isFetchNotLoading, setIsFetchNotLoading] = useState(true);

	const handleMsgShown = useCallback((msgText, type) => {
		if (msgText) {
			setMessage({ text: msgText, type: type });
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
		// setIsPageLoaded(true);
	}, [handleMsgShown, netInfo]);

	const handleNoteOpening = useCallback(
		(index, noteId, title, data, shareWith, userPermission) => {
			console.log('handleNoteOpening');
			setIsNotesModalOpen(true);
			// if (noteId) setMyNotesId(noteId);
			// setNotesTitle(title);
			// setOpenedNoteData(data);
			// setIsNotesModalOpen(true);
			// setNoteSharedUsers(shareWith || []);
			// setIsNoteSharedWithAll(userPermission || false);
			// setCurrentNoteIndex(index);
		},
		[setNotesTitle, setOpenedNoteData, setIsNotesModalOpen]
	);

	return (
		<SafeAreaView style={{ backgroundColor: '#151515' }}>
			<ScrollView
				contentContainerStyle={HomeScreenStyle.background}
				stickyHeaderIndices={[1]}
				showsVerticalScrollIndicator={false}
			>
				<NavBar />
				<View style={HomeScreenStyle.textInputBox}>
					<TextInput
						style={HomeScreenStyle.textInput}
						placeholder="Take a note..."
						// value={email}
						// onChangeText={(text) => {
						// 	setEmail(text) & (message ? setMessage('') : null);
						// }}
					/>
				</View>
				{isFetchNotLoading && <ActivityIndicator style={HomeScreenStyle.loader} animating={true} size={30} />}

				{allNotes.map((note, index) => {
					return (
						<NoteListBox
							key={index}
							notesTitle={note.notesTitle}
							noteData={note.noteData}
							updatedOn={note.updatedOn}
							handleNoteOpening={handleNoteOpening}
						/>
					);
				})}
				<NoteContentModal isNotesModalOpen={isNotesModalOpen} setIsNotesModalOpen={setIsNotesModalOpen} />

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
