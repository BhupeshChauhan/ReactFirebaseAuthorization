import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBEvi-WYoaIxkJaQz1NJXwsf8bGR4ft-Y0",
  authDomain: "reactfireauth-461a3.firebaseapp.com",
  projectId: "reactfireauth-461a3",
  storageBucket: "reactfireauth-461a3.appspot.com",
  messagingSenderId: "635672371117",
  appId: "1:635672371117:web:81fcbb60b04e2c3aac0b24"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)
export default app;