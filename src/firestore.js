// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCFoJNyAlpMx9jGf-NNlu2a113SeWPJ4so",
    authDomain: "bridgette-react-eshop-project.firebaseapp.com",
    projectId: "bridgette-react-eshop-project",
    storageBucket: "bridgette-react-eshop-project.appspot.com",
    messagingSenderId: "422881159228",
    appId: "1:422881159228:web:92b8596382e28c3c177b39",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
