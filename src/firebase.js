import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

//Vivanta - v 1


//Vivanta  - v2
const firebaseConfig = {
  apiKey: "AIzaSyCxzxVTzea1fOwyLic1m_dNiiAIQxnPyRY",
  authDomain: "vivanta23---2.firebaseapp.com",
  projectId: "vivanta23---2",
  storageBucket: "vivanta23---2.appspot.com",
  messagingSenderId: "523483860152",
  appId: "1:523483860152:web:5f9eb5b3f46d297c2ff84d"
};


// Vivanta - v3
// const firebaseConfig = {
//   apiKey: "AIzaSyAZ3G_C-GozDpdDxb1JfLl1UJBxCi5lsUk",
//   authDomain: "vivanta23---3.firebaseapp.com",
//   projectId: "vivanta23---3",
//   storageBucket: "vivanta23---3.appspot.com",
//   messagingSenderId: "788660891990",
//   appId: "1:788660891990:web:a7bb036eaa1dab633da6f7"
// };


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const storage = getStorage(app)
const firebasee = getFirestore(app);
export { app, auth, storage, firebasee };