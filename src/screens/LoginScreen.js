import React, { useState } from 'react';
import { styles } from '../styles/LoginScreenStyle';

import { Text, View, ScrollView, Image, TextInput, TouchableOpacity } from 'react-native';

import Checkbox from 'expo-checkbox';
import { Button } from 'react-native-paper';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

function LoginScreen() {
	const [ispasswordVisible, setIspasswordVisible] = useState(false);
	return (
		<ScrollView contentContainerStyle={styles.background}>
			<Image source={require('../../assets/logo.png')} style={styles.brandLogo} />

			<Text style={styles.title}>Bhemu Notes</Text>
			<TextInput style={styles.textInput} placeholder="Email" keyboardType="email-address" autoComplete="email" />
			<TextInput
				style={styles.textInput}
				placeholder="Password"
				secureTextEntry={!ispasswordVisible}
				autoCapitalize="none"
				autoComplete="current-password"
			/>
			<View style={styles.showPassword} onTouchStart={() => setIspasswordVisible(!ispasswordVisible)}>
				<Checkbox value={ispasswordVisible} />
				<Text style={{ color: 'white', marginLeft: 10 }}>Show Password</Text>
			</View>
			<Button
				mode="contained"
				onPress={() => console.log('Login')}
				loading={false}
				uppercase
				buttonColor="#f0853d"
				style={styles.loginBtn}
			>
				Login
			</Button>

			<TouchableOpacity style={styles.forgotPass}>
				<Text style={{ color: 'white' }}>Forgot Password?</Text>
			</TouchableOpacity>

			<View style={styles.singupBtn}>
				<Text style={{ color: 'hsla(0,0%,100%,.6)' }}>
					Don't have an account yet? <Text style={{ color: 'white' }}>Signup</Text>
				</Text>
			</View>
		</ScrollView>
	);
}

export default LoginScreen;
