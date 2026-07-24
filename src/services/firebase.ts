import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// Firebase configuration placeholder for production build
const firebaseConfig = {
  apiKey: "AIzaSyDemoKeyForUniversitySubmission123",
  authDomain: "spendr-app.firebaseapp.com",
  projectId: "spendr-app",
  storageBucket: "spendr-app.appspot.com",
  messagingSenderId: "1234567890",
  appId: "1:1234567890:web:demo123456"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);