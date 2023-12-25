import { useAuth } from "../../AuthProvider/AuthProvider";
import React from "react";
import { Redirect, Route } from "react-router-dom";

const PrivateRoute: React.FC<any> = ({ component: Component, ...rest }) => {
  const auth = useAuth();

  return (
    <Route
      {...rest}
      render={(props) => {
        if (!auth.isAuthenticated)
          return (
            <Redirect
              to={{ pathname: "/login", state: { from: props.location } }}
            />
          );
        if (auth.isAuthenticated) return <Component {...props} />;
      }}
    />
  );
};
export default PrivateRoute;
