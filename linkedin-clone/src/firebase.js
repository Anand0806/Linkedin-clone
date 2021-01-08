import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyATHte4ETwo-aucnA6fceE1uXoHMh6-cEA",
  authDomain: "linkedin-clone-286d1.firebaseapp.com",
  projectId: "linkedin-clone-286d1",
  storageBucket: "linkedin-clone-286d1.appspot.com",
  messagingSenderId: "447766635498",
  appId: "1:447766635498:web:91ba0c257fd7ed20624893",
  measurementId: "G-LMBQTYVDMW"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth}