// Import the Firebase modules you need
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB2BIdZhmfqce_ATOqWuqVvV4X--Z41nW4",
  authDomain: "prevenza-e4a2c.firebaseapp.com",
  projectId: "prevenza-e4a2c",
  storageBucket: "prevenza-e4a2c.firebasestorage.app",
  messagingSenderId: "342480219530",
  appId: "1:342480219530:web:a9c087f1ed18cb1aceec73",
  measurementId: "G-H6SSQ1976S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const rtdb = getDatabase(app);