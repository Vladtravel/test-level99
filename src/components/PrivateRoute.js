import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import selectors from "../redux/selectors";

const PrivateRoute = ({ children }) => {
  const isAuthenticated = useSelector(selectors.isAuthenticated);

  return isAuthenticated ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
