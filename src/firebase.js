import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: String(import.meta.env.VITE_FIREBASE_apiKey),
  authDomain: String(import.meta.env.VITE_FIREBASE_authDomain),
  projectId: String(import.meta.env.VITE_FIREBASE_projectId),
  storageBucket: String(import.meta.env.VITE_FIREBASE_storageBucket),
  messagingSenderId: String(import.meta.env.VITE_FIREBASE_messagingSenderId),
  appId: String(import.meta.env.VITE_FIREBASE_appId)
};

const firebase = initializeApp(firebaseConfig);

export default firebase;