import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
    apiKey: "AIzaSyDc2cbaaMr6vuj7Rkc6TbtBPLkYx9NuYaY",
    authDomain: "e-ride-eee2e.firebaseapp.com",
    projectId: "e-ride-eee2e",
    storageBucket: "e-ride-eee2e.appspot.com",
    messagingSenderId: "8193166881",
    appId: "1:8193166881:web:8afef658ed1060326f9d60"
  };
//
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
