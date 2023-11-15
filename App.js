import React from 'react';
// import { StyleSheet, Text, ScrollView, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { PaperProvider, DefaultTheme } from 'react-native-paper';
import { NavigationContainer, colorScheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from './src/screens/LoginScreen';
import SignupScreen from './src/screens/SignupScreen';
import ForgottenScreen from './src/screens/ForgottenScreen';

const Stack = createNativeStackNavigator();
const theme = {
	...DefaultTheme,
	colors: {
		...DefaultTheme.colors,
		primary: '#f0853d',
		accent: '#f1c40f',
		surfaceDisabled: '#bd6931',
		background: '#242526',
		text: 'white',
		outline: 'white',
	},
};

const navigationTheme = {
	dark: colorScheme === 'dark',
	colors: {
		// border: theme.colors.background,
		background: theme.colors.background,
		// card: null,
		// notification: theme.colors.outline,
		primary: theme.colors.primary,
		text: theme.colors.outline,
	},
};

export default function App() {
	return (
		<NavigationContainer theme={navigationTheme}>
			<PaperProvider theme={theme}>
				<StatusBar style="light" />
				<Stack.Navigator>
					<Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
					<Stack.Screen name="Signup" component={SignupScreen} options={{ headerShown: false }} />
					<Stack.Screen name="ForgottenPass" component={ForgottenScreen} options={{ headerShown: false }} />
				</Stack.Navigator>
			</PaperProvider>
		</NavigationContainer>
	);
}

// const styles = StyleSheet.create({
// 	container: {
// 		// minHeight: '100%',
// 		flex: 1,
// 		width: '100%',
// 		backgroundColor: '#242526',
// 		// alignItems: 'center',
// 		// justifyContent: 'center',
// 	},
// });
