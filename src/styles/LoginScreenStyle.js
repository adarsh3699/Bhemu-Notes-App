import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	background: {
		minHeight: '100%',
		// flex: 1,
		// backgroundColor: 'red',
		alignSelf: 'center',
		borderRadius: 9,
		alignContent: 'center',
		justifyContent: 'center',
		width: '100%',
	},
	brandLogo: {
		width: 200,
		height: 130,
		alignSelf: 'center',
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
		height: 35,
		minWidth: '86%',
		maxWidth: '86%',
		backgroundColor: 'white',
		alignSelf: 'center',
		borderRadius: 9,
		marginBottom: 20,
		paddingHorizontal: 10,
		fontSize: 16,

		elevation: 10,
		shadowColor: '#f1f1f1',
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
	forgotPass: {
		alignSelf: 'center',
		marginTop: 20,
	},
	singupBtn: {
		position: 'absolute',
		bottom: 0,
		right: 0,
		height: 60,
		borderTopColor: 'rgba(255, 255, 255, 0.3)',
		borderTopWidth: 0.5,
		marginTop: 30,
		justifyContent: 'center',
		alignItems: 'center',
		alignContent: 'center',
		width: '100%',
		// backgroundColor: 'blue',
	},
});

export { styles };
