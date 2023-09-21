import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

//Vivanta - v 1
// const firebaseConfig = {
//   apiKey: "AIzaSyBoHt55UpI1sb7sIPur2TOhgMjUUg3H5Ps",
//   authDomain: "vivanta23-af38d.firebaseapp.com",
//   projectId: "vivanta23-af38d",
//   storageBucket: "vivanta23-af38d.appspot.com",
//   messagingSenderId: "514192563452",
//   appId: "1:514192563452:web:67f986500286c86d840b79"
// };

//Vivanta  - v2
// const firebaseConfig = {
//   apiKey: "AIzaSyCxzxVTzea1fOwyLic1m_dNiiAIQxnPyRY",
//   authDomain: "vivanta23---2.firebaseapp.com",
//   projectId: "vivanta23---2",
//   storageBucket: "vivanta23---2.appspot.com",
//   messagingSenderId: "523483860152",
//   appId: "1:523483860152:web:5f9eb5b3f46d297c2ff84d"
// };

// Vivanta - v3
// const firebaseConfig = {
//   apiKey: "AIzaSyAZ3G_C-GozDpdDxb1JfLl1UJBxCi5lsUk",
//   authDomain: "vivanta23---3.firebaseapp.com",
//   projectId: "vivanta23---3",
//   storageBucket: "vivanta23---3.appspot.com",
//   messagingSenderId: "788660891990",
//   appId: "1:788660891990:web:a7bb036eaa1dab633da6f7"
// };

// Vivanta - v4
// const firebaseConfig = {
//   apiKey: "AIzaSyBN_0UEmkByVIZq6VqRe8XleBMaLgNGeyo",
//   authDomain: "vivanta23---4.firebaseapp.com",
//   projectId: "vivanta23---4",
//   storageBucket: "vivanta23---4.appspot.com",
//   messagingSenderId: "1096760938462",
//   appId: "1:1096760938462:web:83f525740310104444174f"
// };

// Vivanta - v5
const firebaseConfig = {
  apiKey: "AIzaSyDPWF5AvUeS7gjhLaQnTSDpDJiYHQrZFRc",
  authDomain: "vivanta23---5.firebaseapp.com",
  projectId: "vivanta23---5",
  storageBucket: "vivanta23---5.appspot.com",
  messagingSenderId: "727348918518",
  appId: "1:727348918518:web:2e9d0ef1f6d998e4cc54d7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const storage = getStorage(app)
const firebasee = getFirestore(app);
export { app, auth, storage, firebasee };