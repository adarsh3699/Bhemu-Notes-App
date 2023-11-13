import React, { useState } from 'react';
import { login, signup, forgotPass } from '../styles/LoginScreenStyle';

import { Text, View, ScrollView, Image, TextInput, TouchableOpacity } from 'react-native';

import Checkbox from 'expo-checkbox';
import { Button } from 'react-native-paper';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

function LoginScreen({ navigation }) {
	const [ispasswordVisible, setIspasswordVisible] = useState(false);
	return (
		<KeyboardAwareScrollView contentContainerStyle={signup.background}>
			<View style={signup.wrapper}>
				<Text style={signup.title}>Signup</Text>
				<TextInput
					style={login.textInput}
					placeholder="Full Name"
					mode="outlined"
					// keyboardType="email-address"
					autoComplete="name"
					autoCorrect={false}
					inputMode="text"
				/>
				<TextInput
					style={login.textInput}
					placeholder="Email"
					keyboardType="email-address"
					autoComplete="email"
					inputMode="email"
				/>

				<TextInput
					style={login.textInput}
					placeholder="Password (Minimum 8 digits)"
					secureTextEntry={!ispasswordVisible}
					autoCapitalize="none"
					autoComplete="new-password"
				/>
				<TextInput
					style={login.textInput}
					placeholder="Confirm Password (Min 8 digits)"
					secureTextEntry={!ispasswordVisible}
					autoCapitalize="none"
					autoComplete="new-password"
				/>

				<Button
					mode="contained"
					onPress={() => console.log('Login')}
					loading={false}
					uppercase
					buttonColor="#f0853d"
					style={login.loginBtn}
				>
					Login
				</Button>

				<TouchableOpacity style={forgotPass.backToLoginPage} onPress={() => navigation.navigate('Login')}>
					<Text style={{ color: 'white' }}>Already have an Account</Text>
				</TouchableOpacity>
			</View>
		</KeyboardAwareScrollView>
	);
}

export default LoginScreen;
