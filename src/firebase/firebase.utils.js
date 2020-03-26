import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyDvgnRbKpZpjEZo6HSUtWx-f6fsK10mPNY',
  authDomain: 'crown-db-6474b.firebaseapp.com',
  databaseURL: 'https://crown-db-6474b.firebaseio.com',
  projectId: 'crown-db-6474b',
  storageBucket: 'crown-db-6474b.appspot.com',
  messagingSenderId: '672494786370',
  appId: '1:672494786370:web:dff1280fc2637fd5f9dadb',
  measurementId: 'G-W4JH1MV9JG',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
