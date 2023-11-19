import { StyleSheet } from 'react-native';

const HomeScreenStyle = StyleSheet.create({
	background: {
		// flex: 1,
		alignContent: 'center',
		justifyContent: 'flex-end',
		width: '100%',
		backgroundColor: '#242526',
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
	showPassword: {
		flexDirection: 'row',
		marginBottom: 20,
		alignSelf: 'flex-start',
		marginLeft: '7%',
		// backgroundColor: 'red',
	},
	loginBtn: {
		width: '86%',
		alignSelf: 'center',
	},
	message: {
		alignSelf: 'center',
		fontSize: 15,
		// backgroundColor: 'red',
	},
	forgotPass: {
		alignSelf: 'center',
		marginTop: 15,
		padding: 5,
		// backgroundColor: 'red',
	},
	singupBtn: {
		borderTopColor: 'rgba(255, 255, 255, 0.3)',
		borderTopWidth: 0.5,
		marginTop: 120,
		paddingVertical: 15,
		justifyContent: 'center',
		alignItems: 'center',
		alignContent: 'center',
		width: '100%',
		// backgroundColor: 'blue',
	},
});

export { HomeScreenStyle };
