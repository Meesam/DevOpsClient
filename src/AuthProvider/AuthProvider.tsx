import moment from "moment";
import React, { useCallback, useContext, useEffect, useState } from "react";
import { AUTHKEY } from "../Utils/app-setting";

type AuthContext = {
  login: () => void;
  logout: () => void;
  isAuthenticated: boolean | null;
};

export const AuthContext = React.createContext<AuthContext>({
  isAuthenticated: null,
  login: () => {},
  logout: () => {},
});

const AuthProvider: React.FC<any> = ({ children }: { children: any }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const login = useCallback(() => {
    setIsAuthenticated(true);
  }, []);

  const logout = useCallback(() => {
    setIsAuthenticated(false);
  }, []);

  useEffect(() => {
    if (localStorage.getItem(AUTHKEY)) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
  }, [localStorage]);

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContext => {
  const ctx = useContext(AuthContext);
  return ctx;
};

export default AuthProvider;
