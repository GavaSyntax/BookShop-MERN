// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCFfdBue7um_DfkOhKHVv5yhSmKGDHdLVE",
  authDomain: "bookshop-gavas.firebaseapp.com",
  projectId: "bookshop-gavas",
  storageBucket: "bookshop-gavas.appspot.com",
  messagingSenderId: "228519834704",
  appId: "1:228519834704:web:54874098b2c0e1660a4d55"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;