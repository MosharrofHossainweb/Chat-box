// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyC1AmaCiW3B1SLb_K7VEQ0vKfwcZZRL7wI',
  authDomain: 'chatbox-e0c3c.firebaseapp.com',
  databaseURL: 'https://chatbox-e0c3c-default-rtdb.firebaseio.com',
  projectId: 'chatbox-e0c3c',
  storageBucket: 'chatbox-e0c3c.firebasestorage.app',
  messagingSenderId: '524119345441',
  appId: '1:524119345441:web:8830adeddb50246b085660',
  measurementId: 'G-0EK463ZFW9',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export default app;
