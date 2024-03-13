// Import the functions you need from the SDKs you need
// ./services/firebase.js
import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
import { getFirestore } from "firebase/firestore";
import {getStorage} from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBfUICxdk-5eKuhFHS2_C98fLKhWB9GKM4",
  authDomain: "restaurantea-47011.firebaseapp.com",
  projectId: "restaurantea-47011",
  storageBucket: "restaurantea-47011.appspot.com",
  messagingSenderId: "875882306287",
  appId: "1:875882306287:web:aaef6d6bc9c67b00ffd91a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(ReactNativeAsyncStorage)
  });

  const db = getFirestore(app); 
  const storage = getStorage(app)

  export{app, auth, db, storage}; 
  