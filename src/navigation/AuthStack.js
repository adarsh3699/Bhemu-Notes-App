import React from 'react';

import LoginScreen from '../screens/LoginScreen';
import SignupScreen from '../screens/SignupScreen';
import ForgottenScreen from '../screens/ForgottenScreen';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function AuthStack() {
	return (
		<Stack.Navigator>
			<Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
			<Stack.Screen name="Signup" component={SignupScreen} options={{ headerShown: false }} />
			<Stack.Screen name="ForgottenPass" component={ForgottenScreen} options={{ headerShown: false }} />
		</Stack.Navigator>
	);
}
