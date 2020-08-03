import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDEy0437_zVW_vrLAUwtDONawr3pKruHNQ",
  authDomain: "clone-44a66.firebaseapp.com",
  databaseURL: "https://clone-44a66.firebaseio.com",
  projectId: "clone-44a66",
  storageBucket: "clone-44a66.appspot.com",
  messagingSenderId: "60273823511",
  appId: "1:60273823511:web:1378e6c49597d05af17152",
  measurementId: "G-M1RZ9TDYK5"
});

const auth = firebase.auth();
export { auth };
