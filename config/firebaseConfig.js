// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_KEY,
  authDomain: "backend-db-7351c.firebaseapp.com",
  projectId: "backend-db-7351c",
  storageBucket: "backend-db-7351c.firebasestorage.app",
  messagingSenderId: "355645983247",
  appId: "1:355645983247:web:119c5f5c5d470a01b5317a",
  measurementId: "G-JNW43VP8Q7"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db=getFirestore(app);
