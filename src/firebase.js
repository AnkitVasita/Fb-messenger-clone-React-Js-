import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBX_izwUezCbHBVaSF5cwIjR67uO0hD7RU",
  authDomain: "facebook-messenger-clone-c5494.firebaseapp.com",
  databaseURL: "https://facebook-messenger-clone-c5494.firebaseio.com",
  projectId: "facebook-messenger-clone-c5494",
  storageBucket: "facebook-messenger-clone-c5494.appspot.com",
  messagingSenderId: "390323831984",
  appId: "1:390323831984:web:809267aa014c7c7201a775",
  measurementId: "G-V5JPVZTS0S",
});

const db = firebaseApp.firestore();

export default db;
