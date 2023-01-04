import firebase from "firebase";
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';
const firebaseConfig = {
    apiKey: "AIzaSyDIusGaiS28LZOV7qaUF1rce1knp_i2THg",
    authDomain: "olxcloneapp-2b104.firebaseapp.com",
    projectId: "olxcloneapp-2b104",
    storageBucket: "olxcloneapp-2b104.appspot.com",
    messagingSenderId: "950642001704",
    appId: "1:950642001704:web:f6a032a80965865fc2721d",
    measurementId: "G-YFCPGYFQF2"
  };

  export default firebase.initializeApp(firebaseConfig);