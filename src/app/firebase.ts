// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDbs76pIdAB6BZtZbWTC2HgL92qM-Z2hRo",
  authDomain: "nextjs-ff06c.firebaseapp.com",
  projectId: "nextjs-ff06c",
  storageBucket: "nextjs-ff06c.appspot.com",
  messagingSenderId: "313501695118",
  appId: "1:313501695118:web:a9208eccc5ec13cc6a5ddf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
