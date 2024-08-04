import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyB_I74xqA0H6WPbK-jkfsH6_ogpt2R0C6U",
  authDomain: "netflip-c36b2.firebaseapp.com",
  projectId: "netflip-c36b2",
  storageBucket: "netflip-c36b2.appspot.com",
  messagingSenderId: "539290838678",
  appId: "1:539290838678:web:d606d713e13d880b2a44b7",
  measurementId: "G-YL2L56YZ4X"
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
