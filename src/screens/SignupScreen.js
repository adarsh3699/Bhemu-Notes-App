import React, { useState, useCallback } from 'react';
import { login, signup, forgotPass } from '../styles/authScreensStyle';
import { handleUserSignup } from '../firebase/auth';

import { Text, View, ScrollView, KeyboardAvoidingView, Image, TextInput, TouchableOpacity } from 'react-native';

import { Button, HelperText } from 'react-native-paper';

function LoginScreen({ navigation }) {
	const [fullName, setFullName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');
	const [loading, setLoading] = useState(false);
	const [message, setMessage] = useState('');

	const handleSignupBtn = useCallback(async () => {
		handleUserSignup(
			fullName.trim(),
			email.trim(),
			password.trim(),
			confirmPassword.trim(),
			setLoading,
			setMessage
		);
	}, [fullName, email, password, confirmPassword, setLoading, setMessage]);

	return (
		<KeyboardAvoidingView style={signup.background} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
			<View>
				<ScrollView contentContainerStyle={signup.wrapper} keyboardShouldPersistTaps="always">
					<Text style={signup.title}>Signup</Text>
					<TextInput
						style={login.textInput}
						placeholder="Full Name"
						mode="outlined"
						autoComplete="name"
						autoCorrect={false}
						inputMode="text"
						value={fullName}
						onChangeText={(text) => setFullName(text) & (message ? setMessage('') : null)}
					/>
					<TextInput
						style={login.textInput}
						placeholder="Email"
						keyboardType="email-address"
						autoComplete="email"
						inputMode="email"
						value={email}
						onChangeText={(text) => setEmail(text) & (message ? setMessage('') : null)}
					/>

					<TextInput
						style={login.textInput}
						placeholder="Password (Minimum 8 digits)"
						secureTextEntry={true}
						autoCapitalize="none"
						autoComplete="new-password"
						value={password}
						onChangeText={(text) => setPassword(text) & (message ? setMessage('') : null)}
					/>
					<TextInput
						style={login.textInput}
						placeholder="Confirm Password (Min 8 digits)"
						secureTextEntry={true}
						autoCapitalize="none"
						autoComplete="new-password"
						value={confirmPassword}
						onChangeText={(text) => setConfirmPassword(text) & (errorMsg ? setMessage('') : null)}
					/>

					<Button
						uppercase
						buttonColor="#f0853d"
						style={login.loginBtn}
						mode="contained"
						rippleColor="#e8b999"
						theme={{ colors: { surfaceDisabled: '#bd6931' } }}
						loading={loading}
						disabled={loading}
						onPress={handleSignupBtn}
					>
						{!loading ? 'Signup' : null}
					</Button>
					<HelperText type="error" visible={!!message} style={login.message}>
						{message}
					</HelperText>

					<TouchableOpacity style={forgotPass.backToLoginPage} onPress={() => navigation.navigate('Login')}>
						<Text style={{ color: 'white' }}>Already have an Account</Text>
					</TouchableOpacity>
				</ScrollView>
			</View>
		</KeyboardAvoidingView>
	);
}

export default LoginScreen;
