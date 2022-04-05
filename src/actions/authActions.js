import { signInWithPopup, signOut } from 'firebase/auth';
import { auth, googleProvider } from '../firebase/firebase';

export const login = uid => ({
	type: 'LOGIN',
	uid,
});

export const startLogin = () => {
	return () => {
		const result = signInWithPopup(auth, googleProvider)
			.then(result => {
				// console.log(result.user.uid);
			})
			.catch(error => console.log(error));
	};
};

export const logout = () => ({
	type: 'LOGOUT',
});

export const startLogout = () => {
	return () => {
		signOut(auth)
			.then(() => {
				// console.log(`Logged Out`);
			})
			.catch(error => {
				console.log(error);
			});
	};
};
