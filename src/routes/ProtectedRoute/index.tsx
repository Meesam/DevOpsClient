import { useAuth } from "../../AuthProvider/AuthProvider";
import React from "react";
import { Redirect, Route } from "react-router-dom";
import { useHistory, useLocation } from "react-router";
import moment from "moment";
import { AUTHEXPIRY, AUTHKEY } from "../../Utils/app-setting";

const PrivateRoute: React.FC<any> = ({ component: Component, ...rest }) => {
  const auth = useAuth();
  const history = useHistory();
  const location = useLocation();

  React.useEffect(() => {
    if (localStorage.getItem(AUTHKEY)) {
      let expriry = moment(localStorage.getItem(AUTHEXPIRY)).format(
        "DD-MMM-YYYY HH:MM:SS"
      );
      let currentDateTime = moment().format("DD-MMM-YYYY HH:MM:SS");
      if (currentDateTime > expriry) {
        localStorage.removeItem(AUTHKEY);
        localStorage.removeItem(AUTHEXPIRY);
        history.replace(`/login`);
      }
    }
  }, [localStorage, location]);

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
