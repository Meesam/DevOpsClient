import Layout from "../Layouts/Layout";
import AuthLayout from "../Layouts/AuthLayout";
import UnAuthLayout from "../Layouts/UnAuthLayout";
import PrivateRoute from "../routes/ProtectedRoute";
import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "../Pages/Login";
import Home from "../Pages/Home";
import ListUsers from "../Pages/ListUsers";
import { useAuth } from "../AuthProvider/AuthProvider";
import Customers from "../Pages/Admin/Customers";
import Projects from "../Pages/Admin/Projects";

const Router: React.FC = () => {
  const auth = useAuth();

  return (
    <>
      {auth.isAuthenticated !== null && (
        <BrowserRouter>
          <Switch>
            <Route path={["/login"]} exact>
              <Layout layout={UnAuthLayout} isPublic={true}>
                <Route path={"/login"} exact component={() => <Login />} />
              </Layout>
            </Route>
            <Route
              path={["", "/home", "/users", "/customers", "/projects"]}
              exact
            >
              <Layout layout={AuthLayout} isPublic={true}>
                <PrivateRoute
                  path={["", "/home"]}
                  exact
                  component={() => <Home />}
                />
                <PrivateRoute
                  path={"/users"}
                  exact
                  component={() => <ListUsers />}
                />
                <PrivateRoute
                  path={"/projects"}
                  exact
                  component={() => <Projects />}
                />
                <PrivateRoute
                  path={"/customers"}
                  exact
                  component={() => <Customers />}
                />
              </Layout>
            </Route>
            <Route component={() => <div>404</div>}></Route>
          </Switch>
        </BrowserRouter>
      )}
    </>
  );
};

export default Router;
