import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCy2tV60f0ODyxfXGs4Lqp2ugYsatBJW4E",

    authDomain: "react-js-auth-549d2.firebaseapp.com",
  
    projectId: "react-js-auth-549d2",
  
    storageBucket: "react-js-auth-549d2.appspot.com",
  
    messagingSenderId: "510375856905",
  
    appId: "1:510375856905:web:0fcd541205593aade7e1d8",
  
    measurementId: "G-L91HSP1T4K"
};

// Initialize Firebase 
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);


export default firebase;