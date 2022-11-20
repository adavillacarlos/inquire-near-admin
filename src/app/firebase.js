// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from 'firebase/auth'; 

//import { getAuth } from "firebase/auth";
/*
const app = firebase.initializeApp({
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET, 
  messagingSenderId: process.env.REACT_APP_MESSENGER_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID,
});
*/ 
//for testing only 
const app = firebase.initializeApp({
  apiKey: "process.env.REACT_APP_FIREBASE_API_KEY",
  authDomain: "process.env.REACT_APP_AUTH_DOMAIN",
  projectId: "process.env.REACT_APP_PROJECT_ID",
  storageBucket: "process.env.REACT_APP_STORAGE_BUCKET", 
  messagingSenderId: "process.env.REACT_APP_MESSENGER_SENDER_ID",
  appId: "process.env.REACT_APP_APP_ID",
  measurementId: "process.env.REACT_APP_MEASUREMENT_ID",
});

//export const auth = app.auth(); 

//for testing only
export const auth = getAuth();

export const db = getFirestore(app); 
export const storage = getStorage(app);

//For testing purposes only
// app.auth().useEmulator('http://localhost:9099/'); 


export default app; 




 
