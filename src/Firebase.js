// Import the functions you need from the SDKs
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB9s8-SBXpj08NWRN5doQWYWqEnWnX-DFQ",
  authDomain: "treehog-49b1d.firebaseapp.com",
  projectId: "treehog-49b1d",
  storageBucket: "treehog-49b1d.firebasestorage.app",
  messagingSenderId: "813644474388",
  appId: "1:813644474388:web:d8a01aaa24772ff2f25f01",
  measurementId: "G-M81KFQJZKW",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;
