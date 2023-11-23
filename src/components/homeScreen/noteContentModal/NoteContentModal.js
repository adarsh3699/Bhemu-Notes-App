import React from 'react';

import { NoteContentModalStyle } from './NoteContentModalStyle';

import { View, Text, Modal } from 'react-native';
import { IconButton } from 'react-native-paper';

import NavBar from '../navBar/NavBar';

function NoteContentModal({ isNotesModalOpen, setIsNotesModalOpen }) {
	return (
		<Modal
			animationType="slide"
			visible={isNotesModalOpen}
			// transparent={true}
			onRequestClose={() => {
				setIsNotesModalOpen(!isNotesModalOpen);
			}}
		>
			<View style={NoteContentModalStyle.modal}>
				<NavBar />
				<View style={NoteContentModalStyle.modalBar}>
					<View style={{ flexDirection: 'row' }}>
						<IconButton
							icon="arrow-left"
							size={124}
							rippleColor="red"
							// containerColor="blue"
							underlayColor="blue"
							mode="outlined"
							iconColor="white"
							animated={true}
							centered={true}
							borderless={true}
						/>
						<IconButton icon="cloud-upload" size={24} iconColor="white" />
					</View>
					<IconButton icon="playlist-plus" size={24} iconColor="white" />
					<IconButton icon="menu" size={24} iconColor="white" />
				</View>

				<Text>Modal</Text>
			</View>
		</Modal>
	);
}

export default NoteContentModal;
