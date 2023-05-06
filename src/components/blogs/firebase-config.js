// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyABcdky5SZ3hJ64Ip4GxjFq3i4v3aEv-wk",
  authDomain: "edrishti-657e5.firebaseapp.com",
  projectId: "edrishti-657e5",
  storageBucket: "edrishti-657e5.appspot.com",
  messagingSenderId: "812651019915",
  appId: "1:812651019915:web:138210be28ce960d935e8e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const auth = getAuth(app);
export const provider = GoogleAuthProvider();
export const db = getFirestore()
