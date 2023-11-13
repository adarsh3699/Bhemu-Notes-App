import { auth } from './firebaseConfig';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';

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

// async function handleSignupForm(email, password, setLoading, setErrorMsg) {
// 	setLoading(true);

// 	if (!email || !password) {
// 		setErrorMsg('Please enter your email and password');
// 		setLoading(false);
// 		return;
// 	}

// 	try {
// 		await createUserWithEmailAndPassword(auth, email, password)
// 			.then((userCredential) => {
// 				const user = userCredential.user;
// 			})
// 			.catch((error) => {
// 				// console.log(error);
// 				setErrorMsg(error.code);
// 			});
// 	} catch (error) {
// 		console.log(1, error);
// 	} finally {
// 		setLoading(false);
// 	}
// }

export { handleLoginForm };
