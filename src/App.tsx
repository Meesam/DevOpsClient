import React from "react";
import { Routes } from "./routes";
import { useStore } from "./store";

const App = () => {
  const token = useStore((state) => state.token);
  const getToken = useStore((state) => state.getToken);

  React.useEffect(() => {
    if (token === "" || token === undefined) {
      getToken();
    }
  }, [token, getToken]);

  return <Routes isAuthorized={token != "" && token != null} />;
};

export default App;
