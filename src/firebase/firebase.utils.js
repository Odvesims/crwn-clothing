import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
  apiKey: 'AIzaSyC7ITJHobY9tohDpid2fc4-pNZ9aFnZ0xk',
  authDomain: 'crown-db-2cdeb.firebaseapp.com',
  projectId: 'crown-db-2cdeb',
  storageBucket: 'crown-db-2cdeb.appspot.com',
  messagingSenderId: '478361066764',
  appId: '1:478361066764:web:d8fde05ba4d2525c84bd29',
  measurementId: 'G-45S5CQB151',
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
