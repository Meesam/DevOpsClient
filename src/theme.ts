import { createTheme } from "@mui/material/styles";
import { blue, grey, green, red } from "@mui/material/colors";

declare module "@mui/material/styles" {
  interface PaletteColor {
    darker?: string;
  }

  interface SimplePaletteColorOptions {
    darker?: string;
  }
}

const secondary = {
  light: blue[300],
  main: blue[500],
  dark: blue[700],
  darker: blue[900],
  contrastText: "#FFFFFF",
};

const primary = {
  light: grey[100],
  main: grey[300],
  dark: grey[500],
  darker: grey[700],
  contrastText: grey[900],
};
const info = {
  light: secondary.light,
  main: secondary.main,
  dark: secondary.dark,
  darker: secondary.darker,
  contrastText: "#FFFFFF",
};
const success = {
  light: green[300],
  main: green[500],
  dark: green[700],
  darker: green[900],
  contrastText: "#FFFFFF",
};
const error = {
  light: red[300],
  main: red[500],
  dark: red[700],
  darker: red[900],
  contrastText: "#FFFFFF",
};

export const theme = createTheme({
  palette: {
    contrastThreshold: 4.5,
    primary,
    secondary,
    info,
    success,
    error,
  },
  shape: {
    borderRadius: 4,
  },
});
