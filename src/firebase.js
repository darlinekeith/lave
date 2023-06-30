// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "@firebase/firestore";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBRy6JJvIwnFbyxPybWpcZk-KbfKXlXCP0",
  authDomain: "lave-6dadc.firebaseapp.com",
  projectId: "lave-6dadc",
  storageBucket: "lave-6dadc.appspot.com",
  messagingSenderId: "677009466986",
  appId: "1:677009466986:web:38bedb4d18963ccd540c13",
  measurementId: "G-1NV55J0NH7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firestore = getFirestore(app);