import React from 'react';
import { handleSignOut } from '../firebase/auth';

import NavBar from '../components/homeScreen/navBar/NavBar';

import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const HomeScreen = ({ navigation }) => {
	return (
		<View>
			<NavBar />
			<Text>Home Screen</Text>

			<TouchableOpacity onPress={() => navigation.navigate('Settings')}>
				<Text>Back To SettingScreen</Text>
			</TouchableOpacity>

			<TouchableOpacity onPress={handleSignOut}>
				<Text>Logout</Text>
			</TouchableOpacity>
		</View>
	);
};

export default HomeScreen;
