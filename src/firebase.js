import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "admin-react-8992d.firebaseapp.com",
  projectId: "admin-react-8992d",
  storageBucket: "admin-react-8992d.appspot.com",
  messagingSenderId: "917209115390",
  appId: "1:917209115390:web:0bf8480c178f1a3a2653af",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();
export const storage = getStorage(app);
