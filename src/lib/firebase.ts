// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDznqrm2kJfKQXxWpgHWwk-msXH89OEgTo",
  authDomain: "banco-vc.firebaseapp.com",
  projectId: "banco-vc",
  storageBucket: "banco-vc.firebasestorage.app",
  messagingSenderId: "858410245985",
  appId: "1:858410245985:web:56fae7da4c145c30a32f20",
  measurementId: "G-4E7K9TY3B7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
