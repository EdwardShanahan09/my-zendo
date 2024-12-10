import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../../context/User/UserContext";

const ProtectedRoute = ({ children }) => {
  const { user } = useContext(UserContext);
  return user ? children : <Navigate to="/auth/login" />;
};

export default ProtectedRoute;
