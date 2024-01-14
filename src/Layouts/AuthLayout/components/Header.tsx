import React from "react";
import HeaderSearch from "./HeaderSearch";
import ProfilePopup from "./ProfilePopup";
import { BsChatLeftTextFill, BsPersonCircle } from "react-icons/bs";
import { IoMdNotifications } from "react-icons/io";
import ColorModeToggle from "./ColorModeToggle";
import { Box, Grid } from "@mui/material";

const Header = () => {
  const [isNotificationOpen, setIsNotificationOpen] = React.useState(false);
  const [isProfileOpen, setIsProfileOpen] = React.useState(false);

  return (
    <Grid container sx={{ alignItems: "center", padding: 1 }}>
      <Grid xs={8}>
        <HeaderSearch />
      </Grid>
      <Grid xs={4}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 3,
            justifyContent: "end",
            marginRight: 2,
          }}
        >
          <ColorModeToggle />
          <BsChatLeftTextFill />
          <IoMdNotifications />
          <BsPersonCircle />
        </Box>
      </Grid>

      {isNotificationOpen && (
        <Box className="absolute top-12 bottom-0 right-14 z-50 bg-neutral-50 border border-neutral-200 shadow-lg rounded-md w-56 h-60 p-2 flex items-center justify-center">
          <p className="text-gray-500 text-base">No notification...</p>
        </Box>
      )}

      {isProfileOpen && (
        <Box className="absolute top-12 bottom-0 right-5 z-50 bg-neutral-50 border border-neutral-200 shadow-lg rounded-md w-96 h-52 p-4">
          <p className="text-gray-500 text-base">
            <ProfilePopup />
          </p>
        </Box>
      )}
    </Grid>
  );
};

export default Header;
