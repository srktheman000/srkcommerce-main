// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA6B7lYv1qocEkv035nr-Kcd2pC70auj2Y",
  authDomain: "socialmedia-56cb9.firebaseapp.com",
  projectId: "socialmedia-56cb9",
  storageBucket: "socialmedia-56cb9.appspot.com",
  messagingSenderId: "281442393533",
  appId: "1:281442393533:web:2033d25737f90d995ac6d4",
  measurementId: "G-VE5DF91999",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);

export default fireDB;
