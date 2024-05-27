import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "reactchat-3644c.firebaseapp.com",
  projectId: "reactchat-3644c",
  storageBucket: "reactchat-3644c.appspot.com",
  messagingSenderId: "1016967492231",
  appId: "1:1016967492231:web:fbb762357830e9adfd7e22"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth()
export const db = getFirestore()
export const storage = getStorage()