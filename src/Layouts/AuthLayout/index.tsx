import React from "react";

import Header from "./components/Header";
import NavMenu from "./components/NavMenu";
import { Box, Divider, Paper } from "@mui/material";

const AuthLayout: React.FC<any> = ({ children }: { children: any }) => {
  return (
    <Paper
      className="flex flex-row h-screen overflow-hidden"
      color="primary.dark"
      elevation={0}
    >
      <NavMenu />
      <Divider orientation="vertical" flexItem />
      <Box className="flex-1">
        <Header />
        <Divider orientation="horizontal" flexItem />
        <Box className="p-4 h-[calc(100%_-_5rem)] overflow-y-scroll">
          {children}
        </Box>
      </Box>
    </Paper>
  );
};

export default AuthLayout;
