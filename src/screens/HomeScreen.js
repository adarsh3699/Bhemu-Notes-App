import React, { useCallback, useEffect, useState } from 'react';

import { handleSignOut } from '../firebase/auth';
import { getUserAllNoteData } from '../firebase/notes';
import { HomeScreenStyle } from '../styles/HomeScreenStyle';

import NavBar from '../components/homeScreen/navBar/NavBar';
import NoteListBox from '../components/homeScreen/noteListBox/NoteListBox';

import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import AsyncStorage from '@react-native-async-storage/async-storage';

let localStorageNotesData;
try {
	AsyncStorage.getItem('note_data', (err, result) => {
		localStorageNotesData = JSON.parse(result);
	});
} catch (error) {
	console.log('localStorageNotesData', error);
}

const HomeScreen = ({ navigation }) => {
	const [message, setMessage] = useState({ text: '', type: '' });
	const [allNotes, setAllNotes] = useState(localStorageNotesData || []);

	const [currentNoteIndex, setCurrentNoteIndex] = useState(0);
	const [myNotesId, setMyNotesId] = useState('');
	const [notesTitle, setNotesTitle] = useState('');
	const [openedNoteData, setOpenedNoteData] = useState([]);
	const [noteSharedUsers, setNoteSharedUsers] = useState([]);
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
		getUserAllNoteData(setAllNotes, setIsFetchNotLoading, handleMsgShown);
		// setIsPageLoaded(true);
	}, [handleMsgShown]);

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
					// console.log('note', note.updatedOn);
					return (
						<NoteListBox
							key={index}
							notesTitle={note.notesTitle}
							noteData={note.noteData}
							updatedOn={note.updatedOn}
						/>
					);
				})}
			</ScrollView>
		</SafeAreaView>
	);
};

export default HomeScreen;
