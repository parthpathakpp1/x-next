// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "x-next-427410.firebaseapp.com",
  projectId: "x-next-427410",
  storageBucket: "x-next-427410.appspot.com",
  messagingSenderId: "386136257087",
  appId: "1:386136257087:web:a529bdf3ba434ad6f23e8a",
  measurementId: "G-6XB3DG6HZZ",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
