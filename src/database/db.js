import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAgXJZdyKePEtSjPljH0kqPm_PRxDiW0Fo",
  authDomain: "capstone-jualbuku.firebaseapp.com",
  projectId: "capstone-jualbuku",
  storageBucket: "capstone-jualbuku.appspot.com",
  messagingSenderId: "760566116932",
  appId: "1:760566116932:web:bd99bfb9af68814a7e4211"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;