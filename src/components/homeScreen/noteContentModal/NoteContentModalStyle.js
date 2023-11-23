import { StyleSheet } from 'react-native';

const NoteContentModalStyle = StyleSheet.create({
	modal: {
		backgroundColor: '#242526',
		flex: 1,
	},
	modalBar: {
		alignItems: 'center',
		// backgroundColor: 'red',
		flexDirection: 'row',
		height: 40,
		justifyContent: 'space-between',
		// marginHorizontal: 8,
	},
	noteTitle: {
		// backgroundColor: 'blue',
		color: 'white',
		fontSize: 19,
		fontWeight: 'bold',
		marginHorizontal: 15,
		marginBottom: 5,
	},
	noteTextBox: {
		flexDirection: 'row',
		alignItems: 'center',
		// backgroundColor: 'green',
		marginHorizontal: 7,
	},
	noteText: {
		display: 'flex',
		color: 'white',
		fontSize: 15,
		// backgroundColor: 'red',
		marginLeft: 2,
		marginVertical: 5,
		paddingRight: 5,
		width: '82%',
	},
});

export { NoteContentModalStyle };
