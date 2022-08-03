// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB6it3fvb5g4aiXeKDwZQ7DWERDc0Vy0nU",
  authDomain: "pizzameapp.firebaseapp.com",
  projectId: "pizzameapp",
  storageBucket: "pizzameapp.appspot.com",
  messagingSenderId: "739716373876",
  appId: "1:739716373876:web:ff9815f489c9353c652021"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const dp = getDatabase(app);