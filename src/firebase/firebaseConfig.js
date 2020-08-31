import firebase from "firebase/app" // doing import firebase from 'firebase' or import * as firebase from firebase is not good practice.
import "firebase/auth"
import "firebase/database"
import "firebase/firestore"
import Axios from "axios"

// Initialize Firebase
let config = {
  apiKey: "AIzaSyDuO5MdakYKOfHbtkafc5sWI6O3zwOLRPw",
  authDomain: "landingmirador.firebaseapp.com",
  databaseURL: "https://landingmirador.firebaseio.com",
  projectId: "landingmirador",
  storageBucket: "landingmirador.appspot.com",
  messagingSenderId: "392262004868",
  appId: "1:514955703563:web:d5f2ef44a551365fbdde0e",
}

// Initialize Firebase
firebase.initializeApp(config)

const db = firebase.firestore()

export { Axios, db }
