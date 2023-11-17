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
		backgroundColor: '#1e1e1e',
		shadowColor: 'rgb(0,0,0)',
		elevation: 10,
	},
	textInput: {
		backgroundColor: 'bisque',
		height: 32,
		marginHorizontal: 10,
		marginVertical: 10,
		borderRadius: 5,
		paddingHorizontal: 7,

		// minWidth: '86%',
		// maxWidth: '86%',
		// backgroundColor: 'rgba(255, 255, 255, 0.8)',
		// alignSelf: 'center',
		// borderRadius: 9,
		// marginBottom: 20,
		// paddingHorizontal: 10,
		// fontSize: 16,
		// elevation: 20,
		// shadowColor: '#f1f1f1',
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
