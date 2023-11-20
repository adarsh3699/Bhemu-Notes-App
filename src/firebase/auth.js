import { auth, database } from './firebaseConfig';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {
	signInWithEmailAndPassword,
	createUserWithEmailAndPassword,
	sendEmailVerification,
	updateProfile,
	sendPasswordResetEmail,
	onAuthStateChanged,
	signOut,
} from 'firebase/auth';

import {
	getDoc,
	setDoc,
	// updateDoc,
	doc,
	serverTimestamp,
} from 'firebase/firestore';

async function handleLoginForm(email, password, setLoading, setMessage) {
	setLoading(true);

	if (!email || !password) {
		setMessage('Please enter your email and password');
		setLoading(false);
		return;
	}

	try {
		await signInWithEmailAndPassword(auth, email, password)
			.then(async (cred) => {
				await AsyncStorage.setItem('user_profile_img', cred?.user?.photoURL);
				await AsyncStorage.setItem(
					'user_details',
					JSON.stringify({
						userName: cred?.user?.displayName,
						email,
						userId: cred?.user?.uid,
					})
				);
			})
			.catch((error) => {
				console.log(1, error);
				setMessage(error.code);
			});
	} catch (error) {
		console.log(2, error);
	} finally {
		setLoading(false);
	}
}

async function handleUserSignup(fullName, email, password, confirmPassword, setLoading, setMessage) {
	if (!fullName || !email || !password || !confirmPassword) {
		setMessage('Please enter your all details');
		return;
	} else if (password !== confirmPassword) {
		setMessage('Password does not match');
		return;
	}

	setLoading(true);

	try {
		const docRef = doc(database, 'user_details', email);
		await createUserWithEmailAndPassword(auth, email, password)
			.then((cred) => {
				sendEmailVerification(cred.user).then(() => {
					// setMessage('Email verification sent. Please also check in spam');
				});
				updateProfile(cred.user, { displayName: fullName })
					.then(() => {
						setDoc(docRef, {
							fullName,
							email,
							createdOn: serverTimestamp(),
							lastloginedOn: serverTimestamp(),
						})
							.then(async () => {
								setMessage('Signup successful. Please login now');
								await AsyncStorage.setItem(
									'user_details',
									JSON.stringify({
										fullName,
										email,
										userId: cred?.user?.uid,
									})
								);
							})
							.catch((err) => {
								setMessage(err.code);
								console.log(1, err.code);
							});
					})
					.catch((err) => {
						setMessage(err.code);
						console.log(2, err.code);
					});
			})
			.catch((error) => {
				setMessage(error.code);
				console.log(3, error);
			});
	} catch (error) {
		console.log(4, error);
	} finally {
		setLoading(false);
	}
}

async function handleForgetPassword(email, setLoading, setMessage) {
	if (!email) {
		setMessage('Please enter your email');
		return;
	}
	setLoading(true);
	sendPasswordResetEmail(auth, email)
		.then(() => {
			setLoading(false);
			setMessage('Password reset email sent. Please also check spam');
		})
		.catch((error) => {
			setLoading(false);
			setMessage(error.code);
			console.log(error.code);
		});
}

async function handleSignOut() {
	signOut(auth)
		.then(() => {
			AsyncStorage.clear();
		})
		.catch((err) => {
			console.log(err.code);
		});
}

function handleUserState(setUser) {
	onAuthStateChanged(auth, (user) => {
		setUser(user ? 'logged' : 'signIn');
	});
}

export { handleLoginForm, handleUserSignup, handleForgetPassword, handleUserState, handleSignOut };
