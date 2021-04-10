import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCZx9sB8gw56Xo3Gicp25ubkKjmMo5Q4MY",
  authDomain: "wordsgame-c71af.firebaseapp.com",
  projectId: "wordsgame-c71af",
  storageBucket: "wordsgame-c71af.appspot.com",
  messagingSenderId: "242078725220",
  appId: "1:242078725220:web:aef2eaf71908b29d321b71",
};

firebase.initializeApp(firebaseConfig);
export const firestore = firebase.firestore();
