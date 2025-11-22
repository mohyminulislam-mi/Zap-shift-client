import React from "react";
import { AuthContext } from "../AuthContext/AuthContext";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../../firebase/Firebase.init";

const googleProvider = new GoogleAuthProvider();


const AuthProvider = ({ children }) => {
  // Create user
  const registerUser = ( email, password) => {
    return createUserWithEmailAndPassword(auth,  email, password);
  };
  // Sing In user
  const singInUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  // sing In Google
  const singInGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };
  const authInfo = {
    registerUser,
    singInUser,
    singInGoogle,
  };
  return <AuthContext value={authInfo}>{children}</AuthContext>;
};

export default AuthProvider;
