import React from "react";

import Header from "./components/Header";
import NavMenu from "./components/NavMenu";
import { Box } from "@mui/material";

const AuthLayout: React.FC<any> = ({ children }: { children: any }) => {
  return (
    <Box className="flex flex-row bg-neutral-100 h-screen overflow-hidden">
      <NavMenu />
      <Box className="flex-1">
        <Header />
        <Box className="p-4 h-[calc(100%_-_5rem)] overflow-y-scroll">
          {children}
        </Box>
      </Box>
    </Box>
  );
};

export default AuthLayout;
