import { StyleSheet } from 'react-native';

const HomeScreenStyle = StyleSheet.create({
	background: {
		// flex: 1,
		alignContent: 'center',
		backgroundColor: '#242526',
		justifyContent: 'flex-end',
		paddingBottom: 70,
		width: '100%',
	},
	textInputBox: {
		// backgroundColor: '#1e1e1e',
		backgroundColor: '#151515',
		elevation: 10,
		shadowColor: 'black',
		shadowOffset: { width: 0, height: 0 },
		shadowOpacity: 100,
	},
	textInput: {
		backgroundColor: 'bisque',
		borderRadius: 5,
		marginHorizontal: 10,
		marginVertical: 10,
		paddingHorizontal: 7,
	},
	loader: {
		marginVertical: 7,
	},
});

export { HomeScreenStyle };
