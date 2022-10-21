// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA_5EpshCm9tLL2OkNtDv18kyY5Ro74TFs",
    authDomain: "journal-app-cursoreactudemy.firebaseapp.com",
    projectId: "journal-app-cursoreactudemy",
    storageBucket: "journal-app-cursoreactudemy.appspot.com",
    messagingSenderId: "190472562612",
    appId: "1:190472562612:web:824bd025f31a74180f74e1"
};

// Initialize Firebase 
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);