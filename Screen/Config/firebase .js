import firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";
var firebaseConfig = {
  apiKey: "AIzaSyAYbvoZcHj4JtHqiwtKTqkrZUlF7VSPH1Q",
  authDomain: "phoneauthendication.firebaseapp.com",
  databaseURL: "https://phoneauthendication.firebaseio.com",
  projectId: "phoneauthendication",
  storageBucket: "phoneauthendication.appspot.com",
  messagingSenderId: "32926615129",
  appId: "1:32926615129:web:761e5365422f67bba6d348",
  measurementId: "G-37XX4ZPGS4",
};
firebase.initializeApp(firebaseConfig);
export default firebase;
