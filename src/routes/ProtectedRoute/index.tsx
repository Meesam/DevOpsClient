import React from "react";
import { Navigate, Outlet } from "react-router-dom";

interface ProtectedRouteProps {
  isAuthorized: boolean;
  isPublic: boolean;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  isAuthorized,
  isPublic,
}) => {
  console.log("isAuthorized", isAuthorized);

  const renderChild = React.useMemo(() => {
    return isPublic || isAuthorized ? <Outlet /> : <Navigate to="/login" />;
  }, [isAuthorized, isPublic]);

  return <>{renderChild}</>;
};

export default ProtectedRoute;
