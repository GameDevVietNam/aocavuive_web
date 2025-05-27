import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'
const firebaseConfig = {
  apiKey: "AIzaSyA7sVx_I8BqqyIGCyJ8RFacC-3hMb2a0bI",
  authDomain: "aocavuiveweb.firebaseapp.com",
  projectId: "aocavuiveweb",
  storageBucket: "aocavuiveweb.firebasestorage.app",
  messagingSenderId: "907635195326",
  appId: "1:907635195326:web:488866ea1caca258d40def",
  measurementId: "G-5CGC5PXVJX"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
const storage = getStorage(app)

export { app, db, storage }
