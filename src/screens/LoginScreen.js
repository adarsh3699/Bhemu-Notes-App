import React, { useState } from 'react';
import { login } from '../styles/LoginScreenStyle';
import { handleLoginForm } from '../firebase/auth';

import { Text, View, ScrollView, Image, TextInput, TouchableOpacity } from 'react-native';

import Checkbox from 'expo-checkbox';
import { Button } from 'react-native-paper';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

function LoginScreen({ navigation }) {
	const [ispasswordVisible, setIspasswordVisible] = useState(false);
	return (
		<KeyboardAwareScrollView contentContainerStyle={login.background}>
			<View style={login.wrapper}>
				<Image source={require('../../assets/logo.png')} style={login.brandLogo} />
				<Text style={login.title}>Bhemu Notes</Text>
				<TextInput
					style={login.textInput}
					placeholder="Email"
					keyboardType="email-address"
					autoComplete="email"
				/>
				<TextInput
					style={login.textInput}
					placeholder="Password"
					secureTextEntry={!ispasswordVisible}
					autoCapitalize="none"
					autoComplete="current-password"
				/>
				<View style={login.showPassword} onTouchStart={() => setIspasswordVisible(!ispasswordVisible)}>
					<Checkbox value={ispasswordVisible} />
					<Text style={{ color: 'white', marginLeft: 10 }}>Show Password</Text>
				</View>
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

				<View style={login.singupBtn}>
					<Text
						style={{ color: 'hsla(0,0%,100%,.6)', padding: 5 }}
						onPress={() => navigation.navigate('Signup')}
					>
						Don't have an account yet? <Text style={{ color: 'white' }}>Signup</Text>
					</Text>
				</View>
				<TouchableOpacity style={login.forgotPass}>
					<Text onPress={() => navigation.navigate('ForgottenPass')} style={{ color: 'white' }}>
						Forgot Password
					</Text>
				</TouchableOpacity>
			</View>
		</KeyboardAwareScrollView>
	);
}

export default LoginScreen;
