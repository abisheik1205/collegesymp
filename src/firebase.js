import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBoHt55UpI1sb7sIPur2TOhgMjUUg3H5Ps",
  authDomain: "vivanta23-af38d.firebaseapp.com",
  projectId: "vivanta23-af38d",
  storageBucket: "vivanta23-af38d.appspot.com",
  messagingSenderId: "514192563452",
  appId: "1:514192563452:web:67f986500286c86d840b79"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const storage = getStorage(app)
const firebasee = getFirestore(app);
export { app, auth, storage, firebasee };