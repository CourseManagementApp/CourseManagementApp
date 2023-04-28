// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { getFirestore } from 'firebase/firestore';


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const app = firebase.initializeApp( {
  apiKey: "AIzaSyAla--vse9y2c0zU76b1Av_rKNTinNTHMg",
  authDomain: "ecedatabase-ccdbb.firebaseapp.com",
  databaseURL: "https://ecedatabase-ccdbb-default-rtdb.firebaseio.com",
  projectId: "ecedatabase-ccdbb",
  storageBucket: "ecedatabase-ccdbb.appspot.com",
  messagingSenderId: "772999021581",
  appId: "1:772999021581:web:6ac9cee2670a5b3deb4144",
  measurementId: "G-E504DQQLRB"
});

// Initialize Firebase
// const db = firebase.firestore()
export const db = getFirestore(app)

export const auth = app.auth()


// const  boardRef = db.collection('boards')
export default app

