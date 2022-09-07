// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCBkDIJXGdrPb1mTjksmpWcYZ_GoRkjkLk",
  authDomain: "ema-john-simple-76fe8.firebaseapp.com",
  projectId: "ema-john-simple-76fe8",
  storageBucket: "ema-john-simple-76fe8.appspot.com",
  messagingSenderId: "30955539946",
  appId: "1:30955539946:web:106ce483a578e85b587693"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth;