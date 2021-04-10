import firebase from 'firebase/app';
import 'firebase/firestore'
import 'firebase/auth'

var firebaseConfig = {
    apiKey: "AIzaSyAPTHinMYgnL58AyaBmWhohjetZqDXOgRU",
    authDomain: "bluewalls-app.firebaseapp.com",
    projectId: "bluewalls-app",
    storageBucket: "bluewalls-app.appspot.com",
    messagingSenderId: "93935270991",
    appId: "1:93935270991:web:901ada3ae86b2e1509fe3a",
    measurementId: "G-WHF39T9P38",
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore().settings({ timestampsInSnapshots: true})

  export default firebase;