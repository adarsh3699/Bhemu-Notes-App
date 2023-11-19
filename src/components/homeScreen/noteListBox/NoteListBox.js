import React from 'react';
import { NoteListBoxStyle } from './NoteListBoxStyle';

import { View, Text, BulletPoint } from 'react-native';

const NoteListBox = () => {
	return (
		<View style={NoteListBoxStyle.noteBox}>
			<Text style={NoteListBoxStyle.noteTitle}>This is the NoteListBox component.</Text>
			<View style={NoteListBoxStyle.noteContent}>
				<Text style={NoteListBoxStyle.noteContentText}>{'\u25CF Item 1'}</Text>
				<Text style={NoteListBoxStyle.noteContentText}>{'\u25CF Item 1'}</Text>
			</View>
			<View style={NoteListBoxStyle.noteDate}>
				<Text style={NoteListBoxStyle.noteDateText}>08:39 PM</Text>
				<Text style={NoteListBoxStyle.noteTimeText}>17 November 2023</Text>
			</View>
		</View>
	);
};

export default NoteListBox;
