import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from "firebase/firestore";
import { getStorage } from 'firebase/storage';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyDHxc6pqJYOoz6WQeiaq5clbCtj6Dtlno4",
  authDomain: "dogwalker-4c5cb.firebaseapp.com",
  projectId: "dogwalker-4c5cb",
  storageBucket: "dogwalker-4c5cb.appspot.com",
  messagingSenderId: "335345195968",
  appId: "1:335345195968:web:2f1bea7325043ee3c90625",
  measurementId: "G-QGB46BWFV4"
};

const app = initializeApp(firebaseConfig);


export const auth = getAuth();
export const db = getFirestore(app);
export const storage = getStorage(app);
export default app;