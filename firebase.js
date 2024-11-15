import {initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDkrXt1hRPTgS3fUiDnPMhcLA9i5-Evyok',
  authDomain: 'oldschoolfun-413f5.firebaseapp.com',
  projectId: 'oldschoolfun-413f5',
  storageBucket: 'oldschoolfun-413f5.firebasestorage.app',
  messagingSenderId: '741689469336',
  appId: '1:741689469336:web:10c6bb50fec8a4e51ae3ed',
  measurementId: 'G-9B7EX6LM1E',
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export {auth, db};
