import React from 'react';

import HomeScreen from '../screens/HomeScreen';
import SettingScreen from '../screens/SettingScreen';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function HomeStack() {
	return (
		<Stack.Navigator>
			<Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
			<Stack.Screen name="Settings" component={SettingScreen} options={{ headerShown: false }} />
		</Stack.Navigator>
	);
}
