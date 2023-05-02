import React, { useContext } from "react";
import { AuthContextProvider } from "../provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import Spinner from "../pages/spinner/Spinner";

const PrivateRute = ({ children }) => {
  const { user, loader } = useContext(AuthContextProvider);
  const location = useLocation();
  if (!loader) {
    return <Spinner></Spinner>;
  }
  if (user) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default PrivateRute;
