// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC1oxnwGDkdunHaoJqCXMR4WLNm5fARPGY",
    authDomain: "react-redux-fh.firebaseapp.com",
    projectId: "react-redux-fh",
    storageBucket: "react-redux-fh.appspot.com",
    messagingSenderId: "399935598447",
    appId: "1:399935598447:web:6ef441d937b7fc973e029a"
};

// Initialize Firebase
export const FirebaseApp  = initializeApp( firebaseConfig );
export const FirebaseDB   = getFirestore( FirebaseApp );
export const FirebaseAuth = getAuth( FirebaseApp );