import firebase from "firebase/compat/app";
import "firebase/compat/database";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDhZdydKzd35twGqiIhaEbV1QYAwOf8w0A",
  authDomain: "react-login-a33c7.firebaseapp.com",
  projectId: "react-login-a33c7",
  storageBucket: "react-login-a33c7.appspot.com",
  messagingSenderId: "780768102201",
  appId: "1:780768102201:web:7a65ba7d5fbb3f52078ae8",
};

const fireDb = firebase.initializeApp(firebaseConfig);
export const auth = getAuth(fireDb);
export default fireDb.database().ref();
