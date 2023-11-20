import { StyleSheet } from 'react-native';

const HomeScreenStyle = StyleSheet.create({
	background: {
		// flex: 1,
		alignContent: 'center',
		justifyContent: 'flex-end',
		width: '100%',
		backgroundColor: '#242526',
		paddingBottom: 70,
	},
	textInputBox: {
		// backgroundColor: '#1e1e1e',
		backgroundColor: '#151515',
		shadowColor: 'black',
		shadowOpacity: 100,
		shadowOffset: { width: 0, height: 0 },
		elevation: 10,
	},
	textInput: {
		backgroundColor: 'bisque',
		height: 32,
		marginHorizontal: 10,
		marginVertical: 10,
		borderRadius: 5,
		paddingHorizontal: 7,
	},
	loader: {
		marginVertical: 7,
	},
});

export { HomeScreenStyle };
