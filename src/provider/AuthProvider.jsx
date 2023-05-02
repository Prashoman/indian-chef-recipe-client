import React, { createContext } from "react";

export const AuthContextProvider = createContext(null);
const AuthProvider = ({ children }) => {
  const authInfo = {
    user: "badhon",
  };
  return (
    <AuthContextProvider.Provider value={authInfo}>
      {children}
    </AuthContextProvider.Provider>
  );
};

export default AuthProvider;
