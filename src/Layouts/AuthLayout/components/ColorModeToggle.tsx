import React from "react";
import { useColorMode } from "../../../Context/LightAndDarkModeContext";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";

import { MdOutlineLightMode, MdLightMode } from "react-icons/md";
import { Tooltip } from "@mui/material";

const ColorModeToggle = () => {
  const { mode, toggleColorMode } = useColorMode();

  const handleClick = React.useCallback(() => {
    toggleColorMode(mode === "dark" ? "light" : "dark");
  }, [mode]);

  return (
    <Box>
      <Tooltip
        title={mode === "dark" ? "Toggle to light mode" : "Toggle to dark mode"}
      >
        <IconButton sx={{ ml: 1 }} onClick={handleClick} color="inherit">
          {mode === "dark" ? <MdOutlineLightMode /> : <MdLightMode />}
        </IconButton>
      </Tooltip>
    </Box>
  );
};

export default ColorModeToggle;
