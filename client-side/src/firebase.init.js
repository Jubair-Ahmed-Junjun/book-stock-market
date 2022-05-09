// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCC0AHcIE-Ei31d7lack5Us3xDok_ioEVM",
    authDomain: "books-stock-market.firebaseapp.com",
    projectId: "books-stock-market",
    storageBucket: "books-stock-market.appspot.com",
    messagingSenderId: "316252104133",
    appId: "1:316252104133:web:f41c28d524252e3d9ed7ac"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;