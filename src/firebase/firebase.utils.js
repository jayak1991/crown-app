import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth'


const config = {
    apiKey: "AIzaSyD6-PDRp3Hai7UTJqo9Xj5TxpF8lW-J9_4",
    authDomain: "crown-db-36d53.firebaseapp.com",
    databaseURL: "https://crown-db-36d53.firebaseio.com",
    projectId: "crown-db-36d53",
    storageBucket: "crown-db-36d53.appspot.com",
    messagingSenderId: "1073253482292",
    appId: "1:1073253482292:web:30a054905d336abbe7af61",
    measurementId: "G-X8VDV27BB8"
  };

 firebase.initializeApp(config);

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
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;