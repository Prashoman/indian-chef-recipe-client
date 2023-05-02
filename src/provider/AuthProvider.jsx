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
  const [loader, setLoader] = useState(false);
  //created user
  const userSinUp = (email, password) => {
    setLoader(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  //login with google
  const logInWithGoogle = () => {
    setLoader(true);
    return signInWithPopup(auth, googleProvider);
  };
  //login with github
  const logInWithGithub = () => {
    setLoader(true);
    return signInWithPopup(auth, githubProvider);
  };
  //login with email and password
  const sinUpwithEmailPassword = (email, password) => {
    setLoader(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  //loginUser

  useEffect(() => {
    const unsubcribe = onAuthStateChanged(auth, (currenUser) => {
      setUser(currenUser);
      setLoader(true);
    });
    return () => {
      unsubcribe();
    };
  }, []);

  //logOut
  const logOut = () => {
    return signOut(auth);
  };

  const authInfo = {
    user,
    loader,
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
