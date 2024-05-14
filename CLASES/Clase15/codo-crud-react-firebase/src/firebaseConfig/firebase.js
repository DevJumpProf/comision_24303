// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore}from "@firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBapMnRPDJuRaejcGvNYZvsOaXDLSzCqUk",
  authDomain: "crud-codo-react.firebaseapp.com",
  projectId: "crud-codo-react",
  storageBucket: "crud-codo-react.appspot.com",
  messagingSenderId: "946623386753",
  appId: "1:946623386753:web:11efe1102ab1ea5cf12980"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore (app)