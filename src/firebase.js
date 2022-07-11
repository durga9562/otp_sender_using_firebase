import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyDCbhsUkgnSXbbMw5dJioMALnZ0dovuf-Y",
    authDomain: "otp-app-demo-b7205.firebaseapp.com",
    projectId: "otp-app-demo-b7205",
    storageBucket: "otp-app-demo-b7205.appspot.com",
    messagingSenderId: "89999829846",
    appId: "1:89999829846:web:7e37ae153fe7b7bb93c4f7"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;