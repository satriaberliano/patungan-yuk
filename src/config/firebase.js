// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyARx4bdut_9XAe0dzniUe20rUsyvMrb72A",
  authDomain: "patungan-yuk-c22-133.firebaseapp.com",
  databaseURL: "https://patungan-yuk-c22-133-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "patungan-yuk-c22-133",
  storageBucket: "patungan-yuk-c22-133.appspot.com",
  messagingSenderId: "638363237094",
  appId: "1:638363237094:web:eaaf974465bc00f724d927",
  measurementId: "G-D6ELP0HKV9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const database = getDatabase(app);