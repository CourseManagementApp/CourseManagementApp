// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
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
// const db = firebase.firestore()

// const  boardRef = db.collection('boards')
export const firebase = getFirestore(app)


