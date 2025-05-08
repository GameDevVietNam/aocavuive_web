import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
	apiKey: 'AIzaSyCiaftpVEuRPMGVeEuPG4WthBaLDZ4HrzY',
	authDomain: 'ao-ca-vui0e.firebaseapp.com',
	projectId: 'ao-ca-vui0e',
	storageBucket: 'ao-ca-vui0e.firebasestorage.app',
	messagingSenderId: '358961596061',
	appId: '1:358961596061:web:35a885a82e630682a43674',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
const storage = getStorage(app)

export { app, db, storage }
