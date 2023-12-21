import React from "react";

import Header from "./components/Header";
import NavMenu from "./components/NavMenu";

const AuthLayout: React.FC<any> = ({ children }: { children: any }) => {
  return (
    <div className="flex flex-row bg-neutral-100 h-screen w-screen overflow-y-auto overflow-x-hidden">
      <NavMenu />
      <div className="flex-1">
        <Header />
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};

export default AuthLayout;
