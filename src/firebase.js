import firebase from 'firebase'

import 'firebase/firestore'
import 'firebase/auth'

var firebaseConfig = {
    apiKey: "AIzaSyDBjwEIOoHjkS1sD05WaYhi0mxlrS6cIds",
    authDomain: "labsdata-13bd9.firebaseapp.com",
    databaseURL: "https://labsdata-13bd9.firebaseio.com",
    projectId: "labsdata-13bd9",
    storageBucket: "labsdata-13bd9.appspot.com",
    messagingSenderId: "673732582527",
    appId: "1:673732582527:web:3f4a8688ae38e1fa14f34a",
    measurementId: "G-1QEVCBTCNL"
};
// Initialize Firebase
const data = firebase.initializeApp(firebaseConfig);
const db = data.firestore()
const auth = data.auth()

export { db, auth, firebase as default }