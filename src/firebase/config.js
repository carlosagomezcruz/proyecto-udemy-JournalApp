// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';
import { getEnvironments } from '../helpers/getEnvironments';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const {
  VITE_APIKEY,
  VITE_AUTHDOMAIN,
  VITE_PROJECTID,
  VITE_STORAGEBUCKET,
  VITE_MESSAGINGSENDERID,
  VITE_APPID,
  VITE_MEASUREMENTID,

} = getEnvironments();


// //dev/Prod
// const firebaseConfig = {
//     apiKey: "AIzaSyA_5EpshCm9tLL2OkNtDv18kyY5Ro74TFs",
//     authDomain: "journal-app-cursoreactudemy.firebaseapp.com",
//     projectId: "journal-app-cursoreactudemy",
//     storageBucket: "journal-app-cursoreactudemy.appspot.com",
//     messagingSenderId: "190472562612",
//     appId: "1:190472562612:web:824bd025f31a74180f74e1"
// };

// //Testing
// const firebaseConfig = {
//   apiKey: "AIzaSyCqHBMqZL_4SFKbf5XtnhW5_Rm7pjxVQpU",
//   authDomain: "testing-journalapp-23e6f.firebaseapp.com",
//   projectId: "testing-journalapp-23e6f",
//   storageBucket: "testing-journalapp-23e6f.appspot.com",
//   messagingSenderId: "597949300793",
//   appId: "1:597949300793:web:9ace28f0f20cb614854de8",
//   measurementId: "G-8QE7KYCDQJ"
// };

const firebaseConfig = {
  apiKey: VITE_APIKEY,
  authDomain: VITE_AUTHDOMAIN,
  projectId: VITE_PROJECTID,
  storageBucket: VITE_STORAGEBUCKET,
  messagingSenderId: VITE_MESSAGINGSENDERID,
  appId: VITE_APPID,
  measurementId: VITE_MEASUREMENTID
};


// Initialize Firebase 
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);