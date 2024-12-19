import React from 'react';
import { NoteListBoxStyle } from './NoteListBoxStyle';

import { View, Text, TouchableOpacity } from 'react-native';

const NoteListBox = ({ index, openedNote, handleNoteOpening }) => {
	const { noteTitle, noteText, updatedOn } = openedNote;

	return (
		<TouchableOpacity
			style={NoteListBoxStyle.noteBox}
			activeOpacity={1}
			onPress={() => handleNoteOpening(index, openedNote)}
		>
			<Text style={NoteListBoxStyle.noteTitle}>{noteTitle || 'Note Title'}</Text>
			<View style={NoteListBoxStyle.noteContent}>
				<Text style={NoteListBoxStyle.noteContentText}>
					{noteText?.split(noteTitle)[1]?.trim() ? noteText?.split(noteTitle)[1]?.trim() : 'Empty.......'}
				</Text>
			</View>
			<View style={NoteListBoxStyle.noteDate}>
				<Text style={NoteListBoxStyle.noteDateText}>
					{new Date(updatedOn?.seconds * 1000).toLocaleString('en-US') !== 'Invalid Date'
						? new Date(updatedOn?.seconds * 1000).toLocaleString('en-US', {
								hour: '2-digit',
								minute: '2-digit',
								hour12: true,
						  })
						: new Date().toLocaleString('en-US', {
								hour: '2-digit',
								minute: '2-digit',
								hour12: true,
						  })}
				</Text>
				<Text style={NoteListBoxStyle.noteTimeText}>
					{new Date(updatedOn?.seconds * 1000)?.toLocaleDateString('en-US') !== 'Invalid Date'
						? new Date(updatedOn?.seconds * 1000)?.toLocaleDateString(undefined, {
								day: '2-digit',
								month: 'long',
								year: 'numeric',
						  })
						: new Date()?.toLocaleDateString('en-US', {
								day: '2-digit',
								month: 'long',
								year: 'numeric',
						  })}
				</Text>
			</View>
		</TouchableOpacity>
	);
};

export default NoteListBox;
