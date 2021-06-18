import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyDjOZFIf3NZAQuAS5OMEmpcG_jWPBgXYYQ",
  authDomain: "fir-eaedc.firebaseapp.com",
  projectId: "fir-eaedc",
  storageBucket: "fir-eaedc.appspot.com",
  messagingSenderId: "131042993544",
  appId: "1:131042993544:web:f466c8052a0a024f10c63d",
  measurementId: "G-EGPNLTBX46"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };