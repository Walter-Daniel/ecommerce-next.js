// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAzbZNdFm9480WyDm_ch44PPLm5M_vooww",
  authDomain: "ecommerce-nextjs-89013.firebaseapp.com",
  projectId: "ecommerce-nextjs-89013",
  storageBucket: "ecommerce-nextjs-89013.appspot.com",
  messagingSenderId: "932790719925",
  appId: "1:932790719925:web:909b5eb66788a73d66f5fc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);