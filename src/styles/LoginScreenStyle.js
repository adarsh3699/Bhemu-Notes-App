import { StyleSheet } from 'react-native';

const login = StyleSheet.create({
	background: {
		// minHeight: '100%',
		flex: 1,
		backgroundColor: '#242526',
		alignContent: 'center',
		// justifyContent: 'center',
		width: '100%',
	},
	wrapper: {
		// backgroundColor: 'red',
		minHeight: 750,
		justifyContent: 'center',
	},
	brandLogo: {
		width: 200,
		height: 130,
		alignSelf: 'center',
		// marginTop: 120,
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

		// elevation: 10,
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
		height: 40,
		justifyContent: 'center',
		alignSelf: 'center',
	},
	errorText: {
		alignSelf: 'center',
		marginTop: 10,
		fontSize: 14,
	},
	singupBtn: {
		// borderTopColor: 'rgba(255, 255, 255, 0.3)',
		// borderTopWidth: 0.5,
		// marginTop: 15,
		justifyContent: 'center',
		alignItems: 'center',
		alignContent: 'center',
		width: '100%',
		// backgroundColor: 'blue',
	},
	forgotPass: {
		alignSelf: 'center',
		marginTop: 15,
		padding: 5,
		// backgroundColor: 'red',
	},
});

const forgotPass = StyleSheet.create({
	background: {
		flex: 1,
		backgroundColor: '#242526',
		alignContent: 'center',
		// justifyContent: 'center',
		width: '100%',
	},
	title: {
		fontSize: 23,
		fontWeight: 'bold',
		color: 'white',
		textAlign: 'center',
		marginBottom: 20,
		marginTop: 220,
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

const signup = StyleSheet.create({
	background: {
		flex: 1,
		backgroundColor: '#242526',
		alignContent: 'center',
		width: '100%',
	},
	title: {
		fontSize: 23,
		fontWeight: 'bold',
		color: 'white',
		textAlign: 'center',
		marginBottom: 20,
		marginTop: 220,
	},
});

export { login, forgotPass, signup };
