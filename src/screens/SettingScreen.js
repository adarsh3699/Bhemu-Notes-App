import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const SettingScreen = ({ navigation }) => {
	return (
		<View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
			<Text>Setting Screen</Text>

			<TouchableOpacity onPress={() => navigation.navigate('Home')}>
				<Text>Back To HomeScreen</Text>
			</TouchableOpacity>

			<TouchableOpacity>
				<Text>Logout</Text>
			</TouchableOpacity>
		</View>
	);
};

export default SettingScreen;
