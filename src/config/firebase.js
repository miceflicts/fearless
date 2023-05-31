import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, FacebookAuthProvider } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyADMGIX_PDnLYlNHS3yQmbLI5kh8bZfZPI",
  authDomain: "fearless-efe9f.firebaseapp.com",
  projectId: "fearless-efe9f",
  storageBucket: "fearless-efe9f.appspot.com",
  messagingSenderId: "55762616323",
  appId: "1:55762616323:web:3f75ad1a712093136b4e36",
  measurementId: "G-RDZCQJW1NH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const facebookProvider = new FacebookAuthProvider();
