import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyClO9SLhKBrBp7wbExdJdnm1fUUCdMMomI",
    authDomain: "chatapp-1f08f.firebaseapp.com",
    projectId: "chatapp-1f08f",
    storageBucket: "chatapp-1f08f.appspot.com",
    messagingSenderId: "1086482679754",
    appId: "1:1086482679754:web:12be468a5016ddf97ef133",
    measurementId: "G-LNJ5KMN53V"
  };

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth=getAuth();
export const storage = getStorage();
export const db=getFirestore()