import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";

const UnAuthLayout = () => {
  return (
    <div className="h-screen w-screen bg-neutral-50 mx-auto">
      <Header />
      <Outlet />
    </div>
  );
};

export default UnAuthLayout;
