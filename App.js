import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, ScrollView, View } from 'react-native';
import { PaperProvider } from 'react-native-paper';

import LoginScreen from './src/screens/LoginScreen';

export default function App() {
	console.log('Hello World');
	return (
		<PaperProvider>
			<View style={styles.container}>
				<StatusBar style="light" />
				<LoginScreen />
			</View>
		</PaperProvider>
	);
}

const styles = StyleSheet.create({
	container: {
		// minHeight: '100%',
		flex: 1,
		width: '100%',
		backgroundColor: '#242526',
		// alignItems: 'center',
		// justifyContent: 'center',
	},
});
