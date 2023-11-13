import React, { useState, useCallback } from 'react';
import { login } from '../styles/LoginScreenStyle';
import { handleLoginForm } from '../firebase/auth';

import { Text, View, ScrollView, KeyboardAvoidingView, Image, TextInput, TouchableOpacity } from 'react-native';

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Checkbox from 'expo-checkbox';
import { Button, HelperText } from 'react-native-paper';

function LoginScreen({ navigation }) {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [loading, setLoading] = useState(false);
	const [ispasswordVisible, setIspasswordVisible] = useState(false);
	const [errorMsg, setErrorMsg] = useState();

	const handleLogin = useCallback(() => {
		handleLoginForm(email.trim(), password.trim(), setLoading, setErrorMsg);
	}, [email, password]);

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
					autoCapitalize="none"
					value={email}
					onChangeText={(text) => {
						setEmail(text) & (errorMsg ? setErrorMsg('') : null);
					}}
				/>
				<TextInput
					style={login.textInput}
					placeholder="Password"
					secureTextEntry={!ispasswordVisible}
					autoCapitalize="none"
					autoComplete="current-password"
					value={password}
					onChangeText={(text) => setPassword(text) & (errorMsg ? setErrorMsg('') : null)}
				/>
				<View style={login.showPassword} onTouchStart={() => setIspasswordVisible(!ispasswordVisible)}>
					<Checkbox value={ispasswordVisible} />
					<Text style={{ color: 'white', marginLeft: 10 }}>Show Password</Text>
				</View>

				<Button
					mode="contained"
					loading={loading}
					uppercase
					buttonColor="#f0853d"
					style={login.loginBtn}
					onPress={handleLogin}
					disabled={loading}
					rippleColor="#e8b999"
					theme={{ colors: { surfaceDisabled: '#bd6931' } }}
				>
					{!loading ? 'Login' : null}
				</Button>

				<HelperText type="error" visible={!!errorMsg} style={login.errorText}>
					{errorMsg}
				</HelperText>

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
