import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDnKZDYx4mtITGjy6VtEcApohlsD28SAb4",
  authDomain: "fb-clone-7a69c.firebaseapp.com",
  projectId: "fb-clone-7a69c",
  storageBucket: "fb-clone-7a69c.appspot.com",
  messagingSenderId: "601869528869",
  appId: "1:601869528869:web:9fa1b53cc51c20c59d74cc",
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore();

export { db };
