// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAluXPz2Tr9lMaBUcJo0wg4aAEhfXtawmg",
  authDomain: "react-netflix-clone-5beeb.firebaseapp.com",
  projectId: "react-netflix-clone-5beeb",
  storageBucket: "react-netflix-clone-5beeb.appspot.com",
  messagingSenderId: "906054396743",
  appId: "1:906054396743:web:c6bb5f28450e7763ff7a62",
  measurementId: "G-Z5TRSMVG26"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
