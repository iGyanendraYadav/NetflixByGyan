import firebase from 'firebase/compat/app';

import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAopyZgo5oj8Cm3qWLsuwBRVj5a7oxbZog",
    authDomain: "netflixbygyan.firebaseapp.com",
    projectId: "netflixbygyan",
    storageBucket: "netflixbygyan.appspot.com",
    messagingSenderId: "351196753068",
    appId: "1:351196753068:web:25dafe7130a634a7f34309"
  };

// const firebaseApp = firebase.initializedApp(firebaseConfig);
// const db = firebaseApp.firestore();
// const auth = firebase.auth();

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);




export { auth };
export default db;