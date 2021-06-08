import firebase from "firebase/app"; 
import firestore from 'firebase/firestore';
import "firebase/auth"; 

var firebaseConfig = {
    apiKey: "AIzaSyBfhOZTRpgVI6_hz_pXB8Lq1vczMBEwuL0",
    authDomain: "myparadise-5a792.firebaseapp.com",
    projectId: "myparadise-5a792",
    storageBucket: "myparadise-5a792.appspot.com",
    messagingSenderId: "517122413339",
    appId: "1:517122413339:web:64f0bfb406917ff6cb39be"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
firebaseApp.firestore().settings({ timestampsInSnapshots: true});

export default firebaseApp.firestore();