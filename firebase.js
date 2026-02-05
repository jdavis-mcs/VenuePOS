// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth, signInAnonymously } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import {
    getFirestore, 
    collection, 
    doc, 
    getDocs, 
    addDoc, 
    deleteDoc, 
    updateDoc, 
    query, 
    where, 
    orderBy,   // <--- Added
    limit,     // <--- Added
    getDoc,    // <--- Added
    onSnapshot,
    increment
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// --- PASTE YOUR CONFIG HERE ---
const firebaseConfig = {
  apiKey: "AIzaSyAlM8S1unToP0ALIheaSRa7KC7jqKIPyPg",
  authDomain: "venuepos.firebaseapp.com",
  projectId: "venuepos",
  storageBucket: "venuepos.firebasestorage.app",
  messagingSenderId: "328950384760",
  appId: "1:328950384760:web:8967dd2b16c5b88480058d",
  measurementId: "G-71PSSCVD73"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// Enable Anonymous Auth immediately
signInAnonymously(auth).then(() => {
    console.log("System: Connected to Backend");
}).catch((error) => {
    console.error("Auth Error", error);
});

// Export tools
export { 
    getFirestore, 
    collection, 
    doc, 
    getDocs, 
    addDoc, 
    deleteDoc, 
    updateDoc, 
    query, 
    where, 
    orderBy,   // <--- Added
    limit,     // <--- Added
    getDoc,    // <--- Added
    onSnapshot,
    increment
};
