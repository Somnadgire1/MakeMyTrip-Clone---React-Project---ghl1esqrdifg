// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCl_9gormg38Uy-5QAFEBBv6DoUB8_OnZw",
  authDomain: "make-my-trip-auth.firebaseapp.com",
  projectId: "make-my-trip-auth",
  storageBucket: "make-my-trip-auth.appspot.com",
  messagingSenderId: "509744885170",
  appId: "1:509744885170:web:6f883e2b8eabe5154fc8ab",
  measurementId: "G-MRFRLES3YQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);