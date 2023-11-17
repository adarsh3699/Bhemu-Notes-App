import React from 'react';
import { handleSignOut } from '../firebase/auth';
import { HomeScreenStyle } from '../styles/HomeScreenStyle';

import NavBar from '../components/homeScreen/navBar/NavBar';
import NoteListBox from '../components/homeScreen/noteListBox/NoteListBox';

import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const HomeScreen = ({ navigation }) => {
	return (
		<SafeAreaView style={{ backgroundColor: '#1e1e1e' }}>
			<ScrollView
				contentContainerStyle={HomeScreenStyle.background}
				stickyHeaderIndices={[1]}
				showsVerticalScrollIndicator={false}
			>
				<NavBar />
				<View style={HomeScreenStyle.textInputBox}>
					<TextInput
						style={HomeScreenStyle.textInput}
						placeholder="Take a note..."
						// value={email}
						// onChangeText={(text) => {
						// 	setEmail(text) & (message ? setMessage('') : null);
						// }}
					/>
				</View>

				<NoteListBox />

				<Text>Home Screen</Text>
				<TouchableOpacity onPress={() => navigation.navigate('Settings')}>
					<Text>Back To SettingScreen</Text>
				</TouchableOpacity>

				<TouchableOpacity onPress={handleSignOut}>
					<Text>Logout</Text>
				</TouchableOpacity>
				<TouchableOpacity onPress={() => navigation.navigate('Settings')}>
					<Text>Back To SettingScreen</Text>
				</TouchableOpacity>
				<TouchableOpacity onPress={handleSignOut}>
					<Text>Logout</Text>
				</TouchableOpacity>
				<TouchableOpacity onPress={() => navigation.navigate('Settings')}>
					<Text>Back To SettingScreen</Text>
				</TouchableOpacity>
				<TouchableOpacity onPress={handleSignOut}>
					<Text>Logout</Text>
				</TouchableOpacity>
				<TouchableOpacity onPress={() => navigation.navigate('Settings')}>
					<Text>Back To SettingScreen</Text>
				</TouchableOpacity>
				<TouchableOpacity onPress={handleSignOut}>
					<Text>Logout</Text>
				</TouchableOpacity>
				<TouchableOpacity onPress={() => navigation.navigate('Settings')}>
					<Text>Back To SettingScreen</Text>
				</TouchableOpacity>
				<TouchableOpacity onPress={handleSignOut}>
					<Text>Logout</Text>
				</TouchableOpacity>
				<TouchableOpacity onPress={() => navigation.navigate('Settings')}>
					<Text>Back To SettingScreen</Text>
				</TouchableOpacity>

				<TouchableOpacity onPress={handleSignOut}>
					<Text>Logout</Text>
				</TouchableOpacity>
				<TouchableOpacity onPress={() => navigation.navigate('Settings')}>
					<Text>Back To SettingScreen</Text>
				</TouchableOpacity>

				<TouchableOpacity onPress={handleSignOut}>
					<Text>Logout</Text>
				</TouchableOpacity>
				<TouchableOpacity onPress={() => navigation.navigate('Settings')}>
					<Text>Back To SettingScreen</Text>
				</TouchableOpacity>

				<TouchableOpacity onPress={handleSignOut}>
					<Text>Logout</Text>
				</TouchableOpacity>
				<TouchableOpacity onPress={() => navigation.navigate('Settings')}>
					<Text>Back To SettingScreen</Text>
				</TouchableOpacity>

				<TouchableOpacity onPress={handleSignOut}>
					<Text>Logout</Text>
				</TouchableOpacity>
				<TouchableOpacity onPress={() => navigation.navigate('Settings')}>
					<Text>Back To SettingScreen</Text>
				</TouchableOpacity>

				<TouchableOpacity onPress={handleSignOut}>
					<Text>Logout</Text>
				</TouchableOpacity>
				<TouchableOpacity onPress={() => navigation.navigate('Settings')}>
					<Text>Back To SettingScreen</Text>
				</TouchableOpacity>

				<TouchableOpacity onPress={handleSignOut}>
					<Text>Logout</Text>
				</TouchableOpacity>
				<TouchableOpacity onPress={() => navigation.navigate('Settings')}>
					<Text>Back To SettingScreen</Text>
				</TouchableOpacity>

				<TouchableOpacity onPress={handleSignOut}>
					<Text>Logout</Text>
				</TouchableOpacity>
				<TouchableOpacity onPress={() => navigation.navigate('Settings')}>
					<Text>Back To SettingScreen</Text>
				</TouchableOpacity>

				<TouchableOpacity onPress={handleSignOut}>
					<Text>Logout</Text>
				</TouchableOpacity>
				<TouchableOpacity onPress={() => navigation.navigate('Settings')}>
					<Text>Back To SettingScreen</Text>
				</TouchableOpacity>

				<TouchableOpacity onPress={handleSignOut}>
					<Text>Logout</Text>
				</TouchableOpacity>
				<TouchableOpacity onPress={() => navigation.navigate('Settings')}>
					<Text>Back To SettingScreen</Text>
				</TouchableOpacity>

				<TouchableOpacity onPress={handleSignOut}>
					<Text>Logout</Text>
				</TouchableOpacity>
				<TouchableOpacity onPress={() => navigation.navigate('Settings')}>
					<Text>Back To SettingScreen</Text>
				</TouchableOpacity>

				<TouchableOpacity onPress={handleSignOut}>
					<Text>Logout</Text>
				</TouchableOpacity>

				<TouchableOpacity onPress={() => navigation.navigate('Settings')}>
					<Text>Back To SettingScreen</Text>
				</TouchableOpacity>

				<TouchableOpacity onPress={handleSignOut}>
					<Text>Logout</Text>
				</TouchableOpacity>
				<TouchableOpacity onPress={() => navigation.navigate('Settings')}>
					<Text>Back To SettingScreen</Text>
				</TouchableOpacity>

				<TouchableOpacity onPress={handleSignOut}>
					<Text>Logout</Text>
				</TouchableOpacity>

				<TouchableOpacity onPress={() => navigation.navigate('Settings')}>
					<Text>Back To SettingScreen</Text>
				</TouchableOpacity>

				<TouchableOpacity onPress={handleSignOut}>
					<Text>Logout</Text>
				</TouchableOpacity>

				<TouchableOpacity onPress={() => navigation.navigate('Settings')}>
					<Text>Back To SettingScreen</Text>
				</TouchableOpacity>

				<TouchableOpacity onPress={handleSignOut}>
					<Text>Logout</Text>
				</TouchableOpacity>

				<TouchableOpacity onPress={() => navigation.navigate('Settings')}>
					<Text>Back To SettingScreen</Text>
				</TouchableOpacity>

				<TouchableOpacity onPress={handleSignOut}>
					<Text>Logout</Text>
				</TouchableOpacity>
				<TouchableOpacity onPress={() => navigation.navigate('Settings')}>
					<Text>Back To SettingScreen</Text>
				</TouchableOpacity>

				<TouchableOpacity onPress={handleSignOut}>
					<Text>Logout</Text>
				</TouchableOpacity>

				<TouchableOpacity onPress={() => navigation.navigate('Settings')}>
					<Text>Back To SettingScreen</Text>
				</TouchableOpacity>

				<TouchableOpacity onPress={handleSignOut}>
					<Text>Logout</Text>
				</TouchableOpacity>

				<TouchableOpacity onPress={() => navigation.navigate('Settings')}>
					<Text>Back To SettingScreen</Text>
				</TouchableOpacity>

				<TouchableOpacity onPress={handleSignOut}>
					<Text>Logout</Text>
				</TouchableOpacity>
			</ScrollView>
		</SafeAreaView>
	);
};

export default HomeScreen;
