// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDVfbDBBlew1P_9kaLwzJ3jIQKxT7I7Snk",
  authDomain: "netflix-gpt-51599.firebaseapp.com",
  projectId: "netflix-gpt-51599",
  storageBucket: "netflix-gpt-51599.appspot.com",
  messagingSenderId: "668485633655",
  appId: "1:668485633655:web:81e0201f3b1e82ddc96872",
  measurementId: "G-ZWP0ZSBGMY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
