import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCuqzjQuXvO0PUK_5iF7jUZcHppV0UOrGQ",
  authDomain: "react-firebase-647d2.firebaseapp.com",
  projectId: "react-firebase-647d2",
  storageBucket: "react-firebase-647d2.appspot.com",
  messagingSenderId: "923883471121",
  appId: "1:923883471121:web:1a9021960201d564168cb0",
  measurementId: "G-4Z8MD16Y57",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
export { app, auth };