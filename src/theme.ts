import { blue, grey, green, red } from "@mui/material/colors";
import { PaletteMode } from "@mui/material";

declare module "@mui/material/styles" {
  interface PaletteColor {
    darker?: string;
  }

  interface SimplePaletteColorOptions {
    darker?: string;
  }
  interface TypographyVariants {
    tableHeading: React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    tableHeading?: React.CSSProperties;
  }
}

// Update the Typography's variant prop options
declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    tableHeading: true;
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

export const getDesignTokens = (mode: PaletteMode) => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {
          contrastThreshold: 4.5,
          primary,
          secondary,
          info,
          success,
          error,
        }
      : {
          // palette values for dark mode
          contrastThreshold: 4.5,
          primary,
          secondary,
          info,
          success,
          error,
        }),
  },
  shape: {
    borderRadius: 4,
  },
  typography: {
    tableHeading: {
      fontWeight: "bold",
      fontSize: "1.2em",
    },
  },
});
