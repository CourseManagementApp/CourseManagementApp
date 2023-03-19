import { initializeApp } from "firebase/app";
//adding authentication to our project 
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyBcjYJKjxy4w51Lw46JXo20to-JwN48rR8",
    authDomain: "authh-d74a3.firebaseapp.com",
    projectId: "authh-d74a3",
    storageBucket: "authh-d74a3.appspot.com",
    messagingSenderId: "848701646451",
    appId: "1:848701646451:web:fd199c6ad403536f6c2c06",
    measurementId: "G-RV0FR18FCB"
  };
//initializes the connection between firebase and our app 
  const app = initializeApp(firebaseConfig);
  //exporting so the variable can be used in different files 
  export const auth = getAuth(app)