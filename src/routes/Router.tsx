import Layout from "../Layouts/Layout";
import AuthLayout from "../Layouts/AuthLayout";
import UnAuthLayout from "../Layouts/UnAuthLayout";
import PrivateRoute from "../routes/ProtectedRoute";
import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "../Pages/Auth/Login";
import { useAuth } from "../AuthProvider/AuthProvider";
import Customers from "../Pages/Admin/Customers";
import Projects from "../Pages/Admin/Projects";
import AddCustomer from "../Pages/Admin/AddCustomer";
import AddProject from "../Pages/Admin/AddProject";
import CustomerProvider from "../Context/CustomerContext";

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
              path={[
                "",
                "/customers",
                "/projects",
                "/add-customer",
                "/add-project",
              ]}
              exact
            >
              <Layout layout={AuthLayout} isPublic={true}>
                <PrivateRoute
                  path={["", "/projects"]}
                  exact
                  component={() => <Projects />}
                />
                <PrivateRoute
                  path={"/customers"}
                  exact
                  component={() => <Customers />}
                />
                <PrivateRoute
                  path={"/add-customer"}
                  exact
                  component={() => (
                    <CustomerProvider>
                      <AddCustomer />
                    </CustomerProvider>
                  )}
                />
                <PrivateRoute
                  path={"/add-project"}
                  exact
                  component={() => <AddProject />}
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
