import React from 'react';

import { NoteContentModalStyle } from './NoteContentModalStyle';

import { View, Text, Modal, TextInput } from 'react-native';
import { IconButton, ActivityIndicator, Checkbox } from 'react-native-paper';

import NavBar from '../navBar/NavBar';

function NoteContentModal({ isNotesModalOpen, handleNoteClosing, openedNoteData, isSaveBtnLoading }) {
	const { notesTitle, noteData } = openedNoteData;
	// console.log(noteData);
	return (
		<Modal
			animationType="slide"
			visible={isNotesModalOpen}
			// transparent={true}
			onRequestClose={handleNoteClosing}
		>
			<View style={NoteContentModalStyle.modal}>
				<NavBar />
				<View style={NoteContentModalStyle.modalBar}>
					<View style={{ flexDirection: 'row' }}>
						<IconButton
							icon="arrow-left"
							// size={25}
							iconColor="white"
							onPress={handleNoteClosing}
						/>
						{isSaveBtnLoading ? (
							<ActivityIndicator animating={true} color="white" />
						) : (
							<IconButton
								icon="cloud-upload"
								// size={24}
								iconColor="white"
								// loading={true}
								onPress={() => console.log('Pressed')}
							/>
						)}
					</View>
					<IconButton
						icon="playlist-plus"
						// size={24}
						iconColor="white"
						onPress={() => console.log('Pressed')}
					/>
					<IconButton icon="menu" size={24} iconColor="white" onPress={() => console.log('Pressed')} />
				</View>
				<TextInput
					style={NoteContentModalStyle.noteTitle}
					placeholder="Title"
					cursorColor="#f0853d"
					placeholderTextColor="#ffffff9a"
					autoComplete="off"
					value={notesTitle}
				/>

				{noteData.map((item, index) => {
					return (
						<View style={NoteContentModalStyle.noteTextBox} key={index}>
							<Checkbox status={item.isDone ? 'checked' : 'unchecked'} />
							<TextInput
								style={NoteContentModalStyle.noteText}
								cursorColor="#f0853d"
								placeholderTextColor="#ffffff9a"
								autoComplete="off"
								multiline={true}
								value={item.element}
							/>
							<IconButton
								icon="close"
								// size={25}
								iconColor="white"
								style={{ marginLeft: -10 }}
								onPress={() => console.log('Pressed')}
							/>
						</View>
					);
				})}
			</View>
		</Modal>
	);
}

export default NoteContentModal;
