import { initializeApp } from "firebase/app";
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyCYlZQIPJU4GCrZpPMNN0606hOb6owPalo",
  authDomain: "bq-mern.firebaseapp.com",
  projectId: "bq-mern",
  storageBucket: "bq-mern.appspot.com",
  messagingSenderId: "701754057645",
  appId: "1:701754057645:web:478e4575d708101137f724"
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)