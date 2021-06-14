import * as firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
    apiKey: "AIzaSyAi7jWtnwG8Cb0dqFEraHuVwWJ9ZeySn9Q",
    authDomain: "wily-62b8c.firebaseapp.com",
    projectId: "wily-62b8c",
    storageBucket: "wily-62b8c.appspot.com",
    messagingSenderId: "4734921861",
    appId: "1:4734921861:web:d2224adadb46ad1181cdec"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
