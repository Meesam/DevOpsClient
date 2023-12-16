import flattenDeep from "lodash/flattenDeep";
import React from "react";
import { Route, Routes as ReactRoutes } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";

const generateFlattenRoutes = (routes: any) => {
  if (!routes) return [];
  return flattenDeep(
    routes.map(({ routes: subRoutes, ...rest }: any) => [
      rest,
      generateFlattenRoutes(subRoutes),
    ])
  );
};

interface routeType {
  name: string;
  title: string;
  component: any;
  path: string;
  isPublic: boolean;
}

export const renderRoutes = (mainRoutes: any) => {
  const Routes = ({ isAuthorized }: { isAuthorized: boolean }) => {
    const layouts: any = mainRoutes.map(
      (
        { layout: Layout, routes }: { layout: any; routes: routeType[] },
        index: number
      ) => {
        const subRoutes = generateFlattenRoutes(routes) as any;

        return (
          <Route key={index} element={<Layout />}>
            <Route element={<ProtectedRoute isAuthorized={isAuthorized} />}>
              {subRoutes.map(
                ({
                  component: Component,
                  path,
                  name,
                }: {
                  component: any;
                  path: any;
                  name: any;
                }) => {
                  return (
                    Component &&
                    path && (
                      <Route key={name} element={<Component />} path={path} />
                    )
                  );
                }
              )}
            </Route>
          </Route>
        );
      }
    );
    return <ReactRoutes>{layouts}</ReactRoutes>;
  };
  return Routes;
};
