import firebase from "firebase/compat/app";
import "firebase/compat/database";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyBABse0NAcQZ8odCQfWzrpvEiIx_2Y86sE",
  authDomain: "fir-c8970.firebaseapp.com",
  projectId: "fir-c8970",
  storageBucket: "fir-c8970.appspot.com",
  messagingSenderId: "874737821963",
  appId: "1:874737821963:web:bf1092f9c4320d636b1a0e",
  measurementId: "G-T5K1ZHTZ78"
};

const fireDb = firebase.initializeApp(firebaseConfig);
export const auth = getAuth(fireDb);
export default fireDb.database().ref();
