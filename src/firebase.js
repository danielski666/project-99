import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';
import 'firebase/compat/functions';
import 'firebase/compat/messaging';
import 'firebase/compat/database';
//import { getMessaging } from "firebase/messaging/sw";


require("firebase/auth");
require("firebase/firestore");
require("firebase/storage");
require("firebase/functions");

var firebaseConfig = {
  /*KS
  apiKey: "AIzaSyAcq58QjKajrRbuhOejgRwTabySUchaqkU",
  authDomain: "readme-d0716.firebaseapp.com",
  projectId: "readme-d0716",
  storageBucket: "readme-d0716.appspot.com",
  messagingSenderId: "561834886854",
  appId: "1:561834886854:web:067e01e56da82d81df39c7",
  measurementId: "G-D58LVXZKE1"
  */
  apiKey: "AIzaSyCRz007_g__YWEGOSfw6ST0ixh1lzB1qfo",

  authDomain: "mobiledatabase-c4b0f.firebaseapp.com",

  projectId: "mobiledatabase-c4b0f",

  storageBucket: "mobiledatabase-c4b0f.appspot.com",

  messagingSenderId: "646149635200",

  appId: "1:646149635200:web:3e58562530e89c4fe17a65",

  measurementId: "G-95YS2BY79V"

};

//Init firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();
const functions = firebase.functions();
//const messaging = firebase.messaging();
const realtimeDb = firebase.database();
//const messaging = getMessaging(firebaseConfig);

export {
	firebase,
	auth,
	db,
	storage,
	functions,
  realtimeDb
}