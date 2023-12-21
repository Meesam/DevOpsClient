import React from "react";
import AuthLayout from "./AuthLayout";
import UnAuthLayout from "./UnAuthLayout";
import { useAuth } from "../AuthProvider/AuthProvider";

type LayoutProps = {
  layout: any;
  isPublic?: boolean;
  children: any;
};
const Layout: React.FC<LayoutProps> = ({
  layout: Layout,
  isPublic,
  children,
}) => {
  const auth = useAuth();
  return (
    <>
      {auth.isAuthenticated !== null && auth.isAuthenticated ? (
        <AuthLayout>{children}</AuthLayout>
      ) : (
        <UnAuthLayout>{children}</UnAuthLayout>
      )}
    </>
  );
};
export default Layout;
