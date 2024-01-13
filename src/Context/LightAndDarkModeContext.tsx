import { PaletteMode } from "@mui/material";
import React from "react";

export interface ColorModeContextProps {
  mode: PaletteMode | null | undefined;
  toggleColorMode: (val: PaletteMode) => void;
}

export const ColorModeContext = React.createContext<ColorModeContextProps>({
  mode: null,
  toggleColorMode: () => {},
});

const ColorModeProvider: React.FC<any> = ({ children }: { children: any }) => {
  const [mode, setColorMode] = React.useState<any>();

  const toggleColorMode = React.useCallback(
    (val: PaletteMode) => {
      setColorMode(val);
    },
    [mode]
  );

  return (
    <ColorModeContext.Provider
      value={{
        mode,
        toggleColorMode,
      }}
    >
      {children}
    </ColorModeContext.Provider>
  );
};

export const useColorMode = (): ColorModeContextProps => {
  const ctx = React.useContext(ColorModeContext);
  return ctx;
};

export default ColorModeProvider;
