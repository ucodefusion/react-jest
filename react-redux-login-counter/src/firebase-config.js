// Firebase v9+ modular syntax
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAp5AAz1TzdX_CkVi58IGoBGxZWl8kuoz0",
    authDomain: "react-full-stack-508b8.firebaseapp.com",
    projectId: "react-full-stack-508b8",
    storageBucket: "react-full-stack-508b8.appspot.com",
    messagingSenderId: "1072695275678",
    appId: "1:1072695275678:web:9aeebc038bd959dba5cb8f"
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Auth
export const auth = getAuth(app);
