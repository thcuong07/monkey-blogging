// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBowky2kExt2lsfzcjEPlH4H47BwPhlm8w",
    authDomain: "monkey-blogging-e67fe.firebaseapp.com",
    projectId: "monkey-blogging-e67fe",
    storageBucket: "monkey-blogging-e67fe.appspot.com",
    messagingSenderId: "887153292044",
    appId: "1:887153292044:web:f424825c6126e58bd5cf29"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app)