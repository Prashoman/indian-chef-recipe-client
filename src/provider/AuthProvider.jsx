import React, { createContext, useEffect, useState } from "react";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContextProvider = createContext(null);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();
const auth = getAuth(app);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  //created user
  const userSinUp = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  //login with google
  const logInWithGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };
  //login with github
  const logInWithGithub = () => {
    return signInWithPopup(auth, githubProvider);
  };
  //login with email and password
  const sinUpwithEmailPassword = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  //loginUser

  useEffect(() => {
    const unsubcribe = onAuthStateChanged(auth, (currenUser) => {
      setUser(currenUser);
    });
    return () => {
      unsubcribe();
    };
  }, []);

  //logOut
  const logOut = () => {
    return signOut();
  };

  const authInfo = {
    user,
    userSinUp,
    logInWithGoogle,
    logInWithGithub,
    sinUpwithEmailPassword,
    logOut,
  };
  return (
    <AuthContextProvider.Provider value={authInfo}>
      {children}
    </AuthContextProvider.Provider>
  );
};

export default AuthProvider;
