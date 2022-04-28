import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';
import 'firebase/compat/functions';
import 'firebase/compat/messaging';

require("firebase/auth");
require("firebase/firestore");
require("firebase/storage");
require("firebase/functions");
//require("firebase/messaging");

const firebaseConfig = {
  apiKey: "AIzaSyB1aOC6kzLfI3EK4mTZcfkihTBORx88M4I",
  authDomain: "project-99-b98ab.firebaseapp.com",
  projectId: "project-99-b98ab",
  storageBucket: "project-99-b98ab.appspot.com",
  messagingSenderId: "1019381683699",
  appId: "1:1019381683699:web:1109ab03738ddeaca12e86"
};

//Init firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();
const functions = firebase.functions();
const firebaseMessaging = firebase.messaging();

export {
	firebase,
	auth,
	db,
	storage,
	functions,
  firebaseMessaging
}