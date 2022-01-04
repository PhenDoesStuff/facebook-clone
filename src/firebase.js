import firebase from 'firebase';

const firebaseConfig = {
	apiKey: 'AIzaSyCQz298qP0BncJ_qlGwKY-8wcupmfwEZx4',
	authDomain: 'facebook-clone-a2463.firebaseapp.com',
	projectId: 'facebook-clone-a2463',
	storageBucket: 'facebook-clone-a2463.appspot.com',
	messagingSenderId: '612415382740',
	appId: '1:612415382740:web:8414bf6952715beefc8741',
	measurementId: 'G-3CFEVB5TYC',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
