import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAbvVMbKNY814VtWI3_XX1hwiMw2GZ8-Kg",
  authDomain: "patungan-yuk-fd0f9.firebaseapp.com",
  projectId: "patungan-yuk-fd0f9",
  storageBucket: "patungan-yuk-fd0f9.appspot.com",
  messagingSenderId: "816852750018",
  appId: "1:816852750018:web:1232b416f27bce1d1eb55b",
  measurementId: "G-K5W0PPX6ZQ"
};

  const app = initializeApp(firebaseConfig);

 export const db = getFirestore(app);