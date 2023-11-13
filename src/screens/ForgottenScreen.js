import React, { useState } from 'react';
import { forgotPass, login } from '../styles/LoginScreenStyle';

import { Text, View, ScrollView, Image, TextInput, TouchableOpacity } from 'react-native';

import Checkbox from 'expo-checkbox';
import { Button } from 'react-native-paper';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

function LoginScreen({ navigation }) {
	const [ispasswordVisible, setIspasswordVisible] = useState(false);
	return (
		<KeyboardAwareScrollView contentContainerStyle={forgotPass.background}>
			<Text style={forgotPass.title}>Forgotten Password</Text>
			<Text style={forgotPass.aboutText}>Enter Your email linked to your account.</Text>
			<TextInput style={login.textInput} placeholder="Email" keyboardType="email-address" autoComplete="email" />

			<Button
				mode="contained"
				onPress={() => console.log('Login')}
				loading={false}
				uppercase
				buttonColor="#f0853d"
				style={login.loginBtn}
			>
				Send Link
			</Button>

			<TouchableOpacity style={forgotPass.backToLoginPage}>
				<Text onPress={() => navigation.navigate('Login')} style={{ color: 'white' }}>
					Back to Login Page
				</Text>
			</TouchableOpacity>
		</KeyboardAwareScrollView>
	);
}

export default LoginScreen;
