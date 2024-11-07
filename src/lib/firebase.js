import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
	apiKey: import.meta.env.VITE_API_KEY,
	authDomain: 'reactchat-28296.firebaseapp.com',
	projectId: 'reactchat-28296',
	storageBucket: 'reactchat-28296.firebasestorage.app',
	messagingSenderId: '958334452716',
	appId: '1:958334452716:web:457a7d910f547998be76c9',
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore();
