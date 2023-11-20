import { initializeApp } from 'firebase/app';
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore';

import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

// Initialize Firebase
const firebaseConfig = {
	apiKey: 'AIzaSyDbGrbmZGDQfiKdSuozA1YEZpT55XhYk28',
	authDomain: 'bhemu-notes-90831.firebaseapp.com',
	projectId: 'bhemu-notes-90831',
	storageBucket: 'bhemu-notes-90831.appspot.com',
	messagingSenderId: '941161159822',
	appId: '1:941161159822:web:24897a62451bf486dd7ddf',
	measurementId: 'G-KPT2NTWYZD',
};

const app = initializeApp(firebaseConfig);
const database = getFirestore();
const storage = getStorage(app);
const auth = initializeAuth(app, {
	persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});
// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase

export { app, database, auth, storage };
