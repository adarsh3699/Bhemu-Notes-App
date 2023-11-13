import { auth } from './firebaseConfig';
import {
	signInWithEmailAndPassword,
	createUserWithEmailAndPassword,
	sendEmailVerification,
	updateProfile,
	sendPasswordResetEmail,
} from 'firebase/auth';

import {
	getFirestore,
	getDoc,
	setDoc,
	// updateDoc,
	doc,
	serverTimestamp,
} from 'firebase/firestore';

const database = getFirestore();

async function handleLoginForm(email, password, setLoading, setErrorMsg) {
	setLoading(true);

	if (!email || !password) {
		setErrorMsg('Please enter your email and password');
		setLoading(false);
		return;
	}

	try {
		await signInWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				const user = userCredential.user;
			})
			.catch((error) => {
				// console.log(error);
				setErrorMsg(error.code);
			});
	} catch (error) {
		console.log(1, error);
	} finally {
		setLoading(false);
	}
}

async function handleUserSignup(fullName, email, password, confirmPassword, setLoading, setErrorMsg) {
	if (!fullName || !email || !password || !confirmPassword) {
		setErrorMsg('Please enter your all details');
		return;
	} else if (password !== confirmPassword) {
		setErrorMsg('Password does not match');
		return;
	}

	setLoading(true);

	try {
		const docRef = doc(database, 'user_details', email);
		await createUserWithEmailAndPassword(auth, email, password)
			.then((cred) => {
				sendEmailVerification(cred.user).then(() => {
					// setErrorMsg('Email verification sent. Please also check in spam');
				});
				updateProfile(cred.user, { displayName: fullName })
					.then(() => {
						setDoc(docRef, {
							fullName,
							email,
							createdOn: serverTimestamp(),
							lastloginedOn: serverTimestamp(),
						})
							.then(() => {
								setErrorMsg('Signup successful. Please login now');
								// localStorage.setItem(
								// 	'user_details',
								// 	JSON.stringify({
								// 		fullName,
								// 		email,
								// 		userId: cred?.user?.uid,
								// 	})
								// );
								// document.location.href = '/home';
							})
							.catch((err) => {
								setErrorMsg(err.code);
								console.log(1, err.code);
							});
					})
					.catch((err) => {
						setErrorMsg(err.code);
						console.log(2, err.code);
					});
			})
			.catch((error) => {
				setErrorMsg(error.code);
				console.log(3, error);
			});
	} catch (error) {
		console.log(4, error);
	} finally {
		setLoading(false);
	}
}

async function handleForgetPassword(email, setLoading, setMessage) {
	console.log(email);
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

export { handleLoginForm, handleUserSignup, handleForgetPassword };
