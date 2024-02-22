// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
import { getEnvironments } from "../helpers";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const env = getEnvironments();
console.log(env);
// Your web app's Firebase configuration
// Production
// const firebaseConfig = {
//     apiKey: "AIzaSyC1oxnwGDkdunHaoJqCXMR4WLNm5fARPGY",
//     authDomain: "react-redux-fh.firebaseapp.com",
//     projectId: "react-redux-fh",
//     storageBucket: "react-redux-fh.appspot.com",
//     messagingSenderId: "399935598447",
//     appId: "1:399935598447:web:6ef441d937b7fc973e029a"
// };

// Testing
const firebaseConfig = {
    apiKey: "AIzaSyDTt1gh13U3CcXANhhOw1jeW4MVOSjk2Qo",
    authDomain: "testing-36bc5.firebaseapp.com",
    projectId: "testing-36bc5",
    storageBucket: "testing-36bc5.appspot.com",
    messagingSenderId: "962192353670",
    appId: "1:962192353670:web:b4fefe5b674fe55f7c2407"
};

// Initialize Firebase
export const FirebaseApp  = initializeApp( firebaseConfig );
export const FirebaseDB   = getFirestore( FirebaseApp );
export const FirebaseAuth = getAuth( FirebaseApp );