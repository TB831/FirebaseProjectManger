import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "fir-projectmanager.firebaseapp.com",
  databaseURL: "https://fir-projectmanager.firebaseio.com",
  projectId: "fir-projectmanager",
  storageBucket: "fir-projectmanager.appspot.com",
  messagingSenderId: "625088158088"
};

firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true }); // Initializes firestore

export default firebase;