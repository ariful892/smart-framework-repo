// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBbapR4LjXGuI5wAbpezAkOWiFoC9mxjnE",
    authDomain: "smart-framework-42b6c.firebaseapp.com",
    projectId: "smart-framework-42b6c",
    storageBucket: "smart-framework-42b6c.appspot.com",
    messagingSenderId: "281872874766",
    appId: "1:281872874766:web:cecf2fdb596cc253ad6b5f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;