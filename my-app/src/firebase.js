// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//
import firebase from 'firebase/compat/app';
import 'firebase/compat/database'
 // https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDbREFe9__OIzrs5N0KvSvDPJlfe-PYV-Y",
  authDomain: "ece-database.firebaseapp.com",
  databaseURL: "https://ece-database-default-rtdb.firebaseio.com",
  projectId: "ece-database",
  storageBucket: "ece-database.appspot.com",
  messagingSenderId: "501884735282",
  appId: "1:501884735282:web:b6b5dc88e8c7de3ea0512b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app.database().ref();