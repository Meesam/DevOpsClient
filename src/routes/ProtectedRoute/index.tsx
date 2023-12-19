import React from "react";
import { Navigate } from "react-router-dom";

interface ProtectedRouteProps {
  isAuthorized: boolean;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ isAuthorized }) => {
  return isAuthorized ? <Navigate to="/home" /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
