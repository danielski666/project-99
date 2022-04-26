import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';
import 'firebase/compat/functions';
import store from "./store";

require("firebase/auth");
require("firebase/firestore");
require("firebase/storage");
require("firebase/functions");

var firebaseConfig = {
  /*
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

firebase.auth().onAuthStateChanged(user => {
  store.dispatch("fetchUser", user);
});

const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();
const functions = firebase.functions();

export {
	firebase,
	auth,
	db,
	storage,
	functions,
}