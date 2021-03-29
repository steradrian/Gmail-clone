import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyBS3K4hnWxEjGXIHPBBqj5DkzASoGHHP00",
  authDomain: "clone-ba363.firebaseapp.com",
  projectId: "clone-ba363",
  storageBucket: "clone-ba363.appspot.com",
  messagingSenderId: "696995769226",
  appId: "1:696995769226:web:355d9e774fc1e3c362b673",
  measurementId: "G-31S8M4SX0J"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, provider, auth };