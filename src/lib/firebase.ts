import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCtGXjExE1GVkQSgwaMANup8HLGJlzonRE",
  authDomain: "lovify-9e270.firebaseapp.com",
  projectId: "lovify-9e270",
  storageBucket: "lovify-9e270.firebasestorage.app",
  messagingSenderId: "547226535464",
  appId: "1:547226535464:web:3b6cacf5a635eb7058d71d"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);