import { useState, useContext, createContext, useEffect } from "react";
import {
  signInWithPopup,
  GoogleAuthProvider,
  signInWithRedirect,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "../Firebase.js";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState();
//   const [tab, setTab] = useState("home");

  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
  };

  const logOut = () => {
    signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => {
      unsubscribe();
    };
  }, []);
  return (
    <>
      <AuthContext.Provider value={{ googleSignIn, logOut, user }}>
        {children}
      </AuthContext.Provider>
    </>
  );
};

export const UserAuth = () => {
  return useContext(AuthContext);
};
