const { enc, AES, MD5 } = require('react-native-crypto-js');

const encryptionKey = 'bhemu_is_kutta';

function encryptText(text) {
	try {
		const encryptedValue = AES.encrypt(text, encryptionKey).toString();
		console.log('encryptedValue', encryptedValue);
		return encryptedValue;
	} catch (err) {
		console.log('encryptText', err);
		return null;
	}
}

function decryptText(enryptedValue) {
	let value = null;
	try {
		const decrypted = AES.decrypt(enryptedValue, encryptionKey);
		value = enc.Utf8.stringify(decrypted);
	} catch (err) {
		console.log('decryptText', err);
		return null;
	}
	return value || [];
}

function md5Hash(text) {
	try {
		return MD5(text).toString();
	} catch (err) {
		console.log('md5Hash', err);
		return null;
	}
}

// function userDeviceType() {
// 	const { innerWidth: width, innerHeight: height } = window;
// 	if (width > 768) {
// 		return { mobile: false, desktop: true, width, height };
// 	} else {
// 		return { mobile: true, desktop: false, width, height };
// 	}
// }

// function handleErrorShown(msgText, setMsg) {
// 	if (msgText) {
// 		setMsg(msgText);
// 		setTimeout(() => {
// 			setMsg('');
// 		}, 2500);
// 	} else {
// 		console.log('Please Provide Text Msg');
// 	}
// };

export { encryptText, decryptText, md5Hash };
