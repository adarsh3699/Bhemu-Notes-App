import React from 'react';

import { NoteContentModalStyle } from './NoteContentModalStyle';

import { View, Modal, TextInput, KeyboardAvoidingView, ScrollView } from 'react-native';
import { IconButton, Checkbox } from 'react-native-paper';

import NavBar from '../navBar/NavBar';
import NoteContentModalBar from './NoteContentModalBar';

function NoteContentModal({
	isNotesModalOpen,
	handleNoteClosing,
	openedNoteData,
	handleNoteTextChange,
	isSaveBtnLoading,
	handleSaveBtnClick,
}) {
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

				<NoteContentModalBar
					NoteContentModalStyle={NoteContentModalStyle}
					handleNoteClosing={handleNoteClosing}
					isSaveBtnLoading={isSaveBtnLoading}
					handleSaveBtnClick={handleSaveBtnClick}
				/>

				<ScrollView>
					<KeyboardAvoidingView style={NoteContentModalStyle.noteSection}>
						<TextInput
							style={NoteContentModalStyle.noteTitle}
							placeholder="Title"
							cursorColor="#f0853d"
							placeholderTextColor="#ffffff9a"
							autoComplete="off"
							value={notesTitle}
							onChangeText={(e) => handleNoteTextChange(0, e, true)}
						/>
						{noteData.map((item, index) => {
							return item?.type === 'note' ? (
								<TextInput
									key={item?.type + index}
									style={NoteContentModalStyle.noteText}
									cursorColor="#f0853d"
									placeholderTextColor="#ffffff9a"
									autoComplete="off"
									multiline={true}
									onChangeText={(e) => handleNoteTextChange(index, e)}
									value={item.element}
								/>
							) : (
								<View style={NoteContentModalStyle.todoTextBox} key={item?.type + index}>
									<Checkbox status={item.isDone ? 'checked' : 'unchecked'} />
									<TextInput
										style={NoteContentModalStyle.todoText}
										cursorColor="#f0853d"
										placeholderTextColor="#ffffff9a"
										autoComplete="off"
										multiline={true}
										onChangeText={(e) => handleNoteTextChange(index, e)}
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
					</KeyboardAvoidingView>
				</ScrollView>
			</View>
		</Modal>
	);
}

export default NoteContentModal;
