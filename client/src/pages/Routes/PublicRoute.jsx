import { useEffect, useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { UserContext } from "../../context/User/UserContext";

const PublicRoute = ({ children }) => {
  const { user } = useContext(UserContext);
  const loaction = useLocation();

  if (user) {
    return <Navigate to="/dashboard" state={{ from: loaction }} />;
  }

  return children;
};

export default PublicRoute;
