import React, { useEffect, useState } from "react";
import { AuthContext } from "../AuthContext/AuthContext";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { auth } from "../../firebase/Firebase.init";

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser]  = useState(null);
  const [loading, setLoading] = useState(true);
  // Create user
  const registerUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  // Sing In user
  const singInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  // sing In Google
  const singInGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };
  // logOut user
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  //observe user state
  useEffect(() => {
    const unSubscibe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      }
      setLoading(false);
      return () => {
        unSubscibe();
      };
    });
  }, []);

  const authInfo = {
    user,
    loading,
    registerUser,
    singInUser,
    singInGoogle,
    logOut,
  };
  return <AuthContext value={authInfo}>{children}</AuthContext>;
};

export default AuthProvider;
