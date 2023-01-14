import firebase from "firebase";
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';
const firebaseConfig = {
  apiKey: "AIzaSyCjLGLIOREufxrv15GfLB07MfbiCDtcE9g",

  authDomain: "olx-clone-35fb0.firebaseapp.com",

  projectId: "olx-clone-35fb0",

  storageBucket: "olx-clone-35fb0.appspot.com",

  messagingSenderId: "977217668514",

  appId: "1:977217668514:web:04a2c927d44ec47f015efb",

  measurementId: "G-BQJ28VQR9P"
  };

  export default firebase.initializeApp(firebaseConfig);