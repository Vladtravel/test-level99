import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import selectors from "../redux/selectors";

const PublicRoute = ({ children }) => {
  const isAuthenticated = useSelector(selectors.isAuthenticated);
  return isAuthenticated ? <Navigate to="/analytics" /> : children;
};

export default PublicRoute;
