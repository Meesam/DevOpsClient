import { useAuth } from "../../AuthProvider/AuthProvider";
import React from "react";
import {
  Redirect,
  Route,
  RouteChildrenProps,
  RouteComponentProps,
} from "react-router-dom";

type RouteProps = {
  component?:
    | React.ComponentType<RouteComponentProps<any>>
    | React.ComponentType<any>;
  render?: (props: RouteComponentProps<any>) => React.ReactNode;
  children?:
    | ((props: RouteChildrenProps<any>) => React.ReactNode)
    | React.ReactNode;
  path?: string | string[];
  exact?: boolean;
  sensitive?: boolean;
  strict?: boolean;
};

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
