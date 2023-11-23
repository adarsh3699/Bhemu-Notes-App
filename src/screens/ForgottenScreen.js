import React, { useState, useCallback } from 'react';
import { forgotPass, login } from '../styles/authScreensStyle';
import { handleForgetPassword } from '../firebase/auth';

import { Text, View, ScrollView, KeyboardAvoidingView, TextInput, TouchableOpacity } from 'react-native';

import { Button, HelperText } from 'react-native-paper';

function ForgottenScreen({ navigation }) {
	const [email, setEmail] = useState('');
	const [loading, setLoading] = useState(false);
	const [message, setMessage] = useState('');

	const handleSendLink = useCallback(() => {
		handleForgetPassword(email.trim(), setLoading, setMessage);
	}, [email, setMessage, setLoading]);

	return (
		<KeyboardAvoidingView style={forgotPass.background}>
			<View>
				<ScrollView contentContainerStyle={forgotPass.wrapper} keyboardShouldPersistTaps="always">
					<Text style={forgotPass.title}>Forgotten Password</Text>
					<Text style={forgotPass.aboutText}>Enter Your email linked to your account.</Text>
					<TextInput
						style={login.textInput}
						placeholder="Email"
						keyboardType="email-address"
						autoComplete="email"
						autoCapitalize="none"
						autoCorrect={false}
						cursorColor="#f0853d"
						value={email}
						onChangeText={(text) => setEmail(text)}
					/>

					<HelperText type="error" visible={!!message} style={forgotPass.message}>
						{message}
					</HelperText>

					<Button
						mode="contained"
						uppercase
						buttonColor="#f0853d"
						rippleColor="#e8b999"
						theme={{ colors: { surfaceDisabled: '#bd6931' } }}
						style={login.loginBtn}
						disabled={loading}
						loading={loading}
						onPress={handleSendLink}
					>
						{loading ? null : 'Send Link'}
					</Button>

					<TouchableOpacity style={forgotPass.backToLoginPage} onPress={() => navigation.navigate('Login')}>
						<Text style={{ color: 'white' }}>Back to Login Page</Text>
					</TouchableOpacity>
				</ScrollView>
			</View>
		</KeyboardAvoidingView>
	);
}

export default ForgottenScreen;
