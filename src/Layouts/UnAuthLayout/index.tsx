import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";

const UnAuthLayout = () => {
  return (
    <div className="flex-col bg-neutral-100 h-screen w-screen overflow-y-auto overflow-x-hidden">
      <div className="flex-1">
        <Header />
        <div className=" flex justify-center items-center mt-44">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default UnAuthLayout;
