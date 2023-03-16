// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC0VrbAFJC_828MXzAYx0qlKmJkAM0JaIA",
  authDomain: "first-crud-f942a.firebaseapp.com",
  projectId: "first-crud-f942a",
  storageBucket: "first-crud-f942a.appspot.com",
  messagingSenderId: "332965078393",
  appId: "1:332965078393:web:9d1ce0aa6d710eaafa7ba8",
  measurementId: "G-D7W3VHJ46G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const db = firebase.firestore()

// const  boardRef = db.collection('boards')
export const db = getFirestore(app)


