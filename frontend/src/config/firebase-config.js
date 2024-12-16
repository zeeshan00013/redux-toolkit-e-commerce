// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth,GoogleAuthProvider } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDS100HPxL5GL4cVeFFKFuntk-ciqFGyk8",
  authDomain: "fir-work-9c6c3.firebaseapp.com",
  projectId: "fir-work-9c6c3",
  storageBucket: "fir-work-9c6c3.firebasestorage.app",
  messagingSenderId: "701264129530",
  appId: "1:701264129530:web:c3131b13f345d26ce80843",
  measurementId: "G-C8T11N18KD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);
 export const googleProvider =new GoogleAuthProvider();
