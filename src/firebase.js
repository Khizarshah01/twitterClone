import firebase from "firebase/app";
import "firebase/auth"; // Import the Firebase Authentication module
import "firebase/firestore"; // You may already have this import for Firestore

const firebaseConfig = {
    apiKey: "AIzaSyBi8Kj0sazuT0gENEqRlCuD4XA-AFFyHOo",
    authDomain: "thread-clone-8b0f9.firebaseapp.com",
    projectId: "thread-clone-8b0f9",
    storageBucket: "thread-clone-8b0f9.appspot.com",
    messagingSenderId: "776570539826",
    appId: "1:776570539826:web:33d3daa174ce5c8f38912b",
    measurementId: "G-WH2GPLJ8CL"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export const auth = firebase.auth(); // Export the 'auth' object for Firebase Authentication
export default db;