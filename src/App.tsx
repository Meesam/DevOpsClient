import React from "react";
import AuthProvider from "./AuthProvider/AuthProvider";
import Router from "./routes/Router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ThemeProvider, useTheme } from "@mui/material/styles";
import { theme } from "./theme";
import ColorModeProvider from "./Context/LightAndDarkModeContext";

const queryClient = new QueryClient();

const App: React.FC = () => {
  //const theme = useTheme();

  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <ColorModeProvider>
          <ThemeProvider theme={theme}>
            <Router />
          </ThemeProvider>
        </ColorModeProvider>
      </AuthProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};
export default App;
