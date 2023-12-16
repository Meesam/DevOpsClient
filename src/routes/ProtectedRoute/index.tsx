import React from "react";
import { Navigate, Outlet } from "react-router-dom";

interface ProtectedRouteProps {
  isAuthorized: boolean;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ isAuthorized }) => {
  return isAuthorized ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
