import React from "react";
import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <div>
      <h3>Protected Routes</h3>
      <Outlet />
    </div>
  );
};

export default AuthLayout;
