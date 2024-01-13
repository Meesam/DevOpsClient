import { useTheme } from "@mui/material/styles";
import React from "react";
import {
  ColorModeContext,
  useColorMode,
} from "../../../Context/LightAndDarkModeContext";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import { theme } from "../../../theme";

import { MdOutlineLightMode, MdLightMode } from "react-icons/md";

const ColorModeToggle = () => {
  const { mode, toggleColorMode } = useColorMode();

  const handleClick = React.useCallback(() => {
    toggleColorMode(mode === "dark" ? "light" : "dark");
  }, [mode]);

  React.useEffect(() => {
    theme.palette.mode = mode === "dark" ? "light" : "dark";
  }, [mode]);

  return (
    <Box>
      <IconButton sx={{ ml: 1 }} onClick={handleClick} color="inherit">
        {mode === "dark" ? <MdOutlineLightMode /> : <MdLightMode />}
      </IconButton>
    </Box>
  );
};

export default ColorModeToggle;
