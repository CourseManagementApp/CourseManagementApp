// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore"
import { getAuth } from "firebase/auth";

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
const firebaseApp = initializeApp(firebaseConfig);
// const db = firebase.firestore()

export const auth = getAuth(firebaseApp);
// const  boardRef = db.collection('boards')
export const firebase = getFirestore(firebaseApp)


// auth.onAuthStateChanged((user) => {
//   if (user) {
//     // User is signed in, navigate to the protected route
//     window.location.href = "/protected.html";
//   } else {
//     // User is not signed in, navigate to the public route
//     window.location.href = "/signin.html";
//   }
// });

// pssword ufece2023
