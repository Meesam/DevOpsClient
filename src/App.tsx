import React from "react";
import AuthProvider from "./AuthProvider/AuthProvider";
import Router from "./routes/Router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import "@radix-ui/themes/styles.css";
import { Theme, ThemePanel } from "@radix-ui/themes";

const queryClient = new QueryClient();

const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <Theme
          appearance="light"
          accentColor="cyan"
          grayColor="sage"
          panelBackground="solid"
        >
          <Router />
          {/*<ThemePanel />*/}
        </Theme>
      </AuthProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};
export default App;
