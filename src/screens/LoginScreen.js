import React, { useState, useCallback } from 'react';
import { login } from '../styles/authScreensStyle';
import { handleLoginForm } from '../firebase/auth';

import { Text, View, ScrollView, KeyboardAvoidingView, Image, TextInput, TouchableOpacity } from 'react-native';

import { Button, Checkbox, HelperText } from 'react-native-paper';

function LoginScreen({ navigation }) {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [loading, setLoading] = useState(false);
	const [ispasswordVisible, setIspasswordVisible] = useState(false);
	const [message, setMessage] = useState('');

	const handleLogin = useCallback(() => {
		handleLoginForm(email.trim(), password.trim(), setLoading, setMessage);
	}, [email, password]);

	return (
		<KeyboardAvoidingView style={login.background}>
			<View>
				<ScrollView contentContainerStyle={login.wrapper} keyboardShouldPersistTaps="always">
					<Image source={require('../../assets/myLogoM.png')} style={login.brandLogo} />
					<Text style={login.title}>Bhemu Notes</Text>
					<TextInput
						style={login.textInput}
						placeholder="Email"
						keyboardType="email-address"
						autoComplete="email"
						autoCapitalize="none"
						cursorColor="#f0853d"
						value={email}
						onChangeText={(text) => {
							setEmail(text) & (message ? setMessage('') : null);
						}}
						returnKeyType="next"
						inputMode="email"
					/>
					<TextInput
						style={login.textInput}
						placeholder="Password"
						secureTextEntry={!ispasswordVisible}
						autoCapitalize="none"
						contextMenuHidden={true}
						autoComplete="current-password"
						cursorColor="#f0853d"
						keyboardType={ispasswordVisible ? 'visible-password' : null}
						value={password}
						onChangeText={(text) => setPassword(text) & (message ? setMessage('') : null)}
					/>
					<View style={login.showPassword} onTouchStart={() => setIspasswordVisible(!ispasswordVisible)}>
						<Checkbox status={ispasswordVisible ? 'checked' : 'unchecked'} onPress={() => {}} />
						<Text style={{ color: 'white', marginLeft: 10 }}>Show Password</Text>
					</View>

					<Button
						mode="contained"
						loading={loading}
						uppercase
						style={login.loginBtn}
						onPress={handleLogin}
						disabled={loading}
					>
						{!loading ? 'Login' : null}
					</Button>

					<HelperText type="error" visible={!!message} style={login.message}>
						{message}
					</HelperText>
					<TouchableOpacity style={login.forgotPass} onPress={() => navigation.navigate('ForgottenPass')}>
						<Text style={{ color: 'white' }}>Forgot Password</Text>
					</TouchableOpacity>

					<View style={login.singupBtn}>
						<Text
							style={{ color: 'hsla(0,0%,100%,.6)', padding: 5 }}
							onPress={() => navigation.navigate('Signup')}
						>
							Don't have an account yet? <Text style={{ color: 'white' }}>Signup</Text>
						</Text>
					</View>
				</ScrollView>
			</View>
		</KeyboardAvoidingView>
	);
}

export default LoginScreen;
