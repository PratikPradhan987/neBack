import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from '@firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyAyRnBcd9-oFjOWnee367_Ty5thcIDRGMo",
  authDomain: "next-auth-crud-7d201.firebaseapp.com",
  projectId: "next-auth-crud-7d201",
  storageBucket: "next-auth-crud-7d201.appspot.com",
  messagingSenderId: "592605890647",
  appId: "1:592605890647:web:b8eb57f9d6e677cacfbb12"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage(app);
export const database = getFirestore(app);