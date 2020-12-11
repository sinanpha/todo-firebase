import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyAtKxPuMkhX5_gUxWOLK1eppFiTgwOMZ3w",
  authDomain: "vd-1-59e53.firebaseapp.com",
  databaseURL: "https://vd-1-59e53.firebaseio.com",
  projectId: "vd-1-59e53",
  storageBucket: "vd-1-59e53.appspot.com",
  messagingSenderId: "61589958525",
  appId: "1:61589958525:web:a26559d44d08c003d2e614",
  measurementId: "G-1MVLMTY1J6"
};

firebase.initializeApp(config);
firebase.firestore();

export default firebase;
