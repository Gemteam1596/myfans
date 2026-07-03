import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAp8XWK5ZU2cfFeMRQwnBKz3WkhlVrk5P0",
  authDomain: "fangang-8.firebaseapp.com",
  projectId: "fangang-8",
  storageBucket: "fangang-8.firebasestorage.app",
  messagingSenderId: "443553104310",
  appId: "1:443553104310:web:564d1a6036c8f5a3b10117",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);

export default app;