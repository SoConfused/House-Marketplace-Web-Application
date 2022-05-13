// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import{getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBa787GELCHVbtO8yWj7qvkTOr6yM7bsXI",
  authDomain: "house-marketplace-app-31ffc.firebaseapp.com",
  projectId: "house-marketplace-app-31ffc",
  storageBucket: "house-marketplace-app-31ffc.appspot.com",
  messagingSenderId: "152750751301",
  appId: "1:152750751301:web:6771181f114c3730f8ad2c"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();