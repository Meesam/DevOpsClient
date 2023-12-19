import React, { useEffect } from "react";
import { Routes } from "./routes";
import { useStore } from "./store";

const App = () => {
  const token = useStore((state) => state.token);
  const getToken = useStore((state) => state.getToken);

  React.useEffect(() => {
    if (token === "" || token === undefined) {
      getToken();
    }
  }, [token]);

  console.log("mytoken ", token);

  return <Routes isAuthorized={true} />;
};

export default App;
