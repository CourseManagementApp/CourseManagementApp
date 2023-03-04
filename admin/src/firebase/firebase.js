// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAOYKnvrvTAT4JTizVrUGUhPlnjf-34yJs",
  authDomain: "ece-dept-21d39.firebaseapp.com",
  projectId: "ece-dept-21d39",
  storageBucket: "ece-dept-21d39.appspot.com",
  messagingSenderId: "929539097423",
  appId: "1:929539097423:web:2880a934993fb641933b3a",
  measurementId: "G-ST0GQBTFBV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const db = firebase.firestore()

// const  boardRef = db.collection('boards')
export const db = getFirestore(app)


