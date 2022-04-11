// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD7AaVMxFtqanS8b520MIwYQqAHPO9_EIQ",
    authDomain: "ema-john-e-commerce-30189.firebaseapp.com",
    projectId: "ema-john-e-commerce-30189",
    storageBucket: "ema-john-e-commerce-30189.appspot.com",
    messagingSenderId: "274400814140",
    appId: "1:274400814140:web:c6aaff5b453d1c9d8a4f39"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;