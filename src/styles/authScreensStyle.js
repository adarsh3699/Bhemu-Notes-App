import { StyleSheet } from 'react-native';

const login = StyleSheet.create({
	background: {
		flex: 1,
		alignContent: 'center',
		justifyContent: 'flex-end',
		width: '100%',
	},
	wrapper: {
		// backgroundColor: 'red',
		// minHeight: 750,
		// flex: 1,
	},
	brandLogo: {
		height: 130,
		aspectRatio: 1,
		alignSelf: 'center',
		marginTop: 50,
		// backgroundColor: 'white',
	},
	title: {
		fontSize: 24,
		fontWeight: 'bold',
		color: 'white',
		textAlign: 'center',
		marginBottom: 30,
	},
	textInput: {
		height: 40,
		minWidth: '86%',
		maxWidth: '86%',
		backgroundColor: 'rgba(255, 255, 255, 0.8)',
		alignSelf: 'center',
		borderRadius: 9,
		marginBottom: 20,
		paddingHorizontal: 10,
		fontSize: 16,

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

const signup = StyleSheet.create({
	background: {
		flex: 1,
		alignContent: 'center',
		justifyContent: 'center',
		width: '100%',
	},
	title: {
		fontSize: 23,
		fontWeight: 'bold',
		color: 'white',
		textAlign: 'center',
		marginBottom: 20,
		marginTop: 100,
	},
});

const forgotPass = StyleSheet.create({
	background: {
		flex: 1,
		alignContent: 'center',
		justifyContent: 'center',
		width: '100%',
	},
	title: {
		fontSize: 23,
		fontWeight: 'bold',
		color: 'white',
		textAlign: 'center',
		marginBottom: 20,
		marginTop: 100,
	},
	aboutText: {
		color: 'white',
		textAlign: 'center',
		marginBottom: 10,
	},
	backToLoginPage: {
		alignSelf: 'center',
		marginTop: 20,
		padding: 5,
		// backgroundColor: 'red',
	},
});

export { login, forgotPass, signup };
