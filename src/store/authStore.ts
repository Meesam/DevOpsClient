import { StateCreator } from "zustand";
import { devtools, persist } from "zustand/middleware";

const myMiddlewares = (f: any) => devtools(persist(f, { name: "AuthStore" }));

export interface AuthSlice {
  token: string;
  expiration: string;
  setToken: (token: string) => void;
  setExpiration: (expiration: string) => void;
  getToken: () => void;
  getExpiration: () => void;
}

export const createAuthSlice: StateCreator<AuthSlice> = (set) => ({
  token: "",
  expiration: "",
  setToken: (tokenData: string) => {
    myMiddlewares(
      set((state: any) => ({
        ...state,
        token: localStorage.setItem("myToken", tokenData),
      }))
    );
  },

  setExpiration: (expirationData: string) => {
    myMiddlewares(
      set((state: any) => ({
        ...state,
        expiration: localStorage.setItem("myExpiration", expirationData),
      }))
    );
  },

  getToken: () => {
    set((state: any) => ({
      ...state,
      token: localStorage.getItem("myToken"),
    }));
  },

  getExpiration: () => {
    set((state: any) => ({
      ...state,
      expiration: localStorage.getItem("myExpiration"),
    }));
  },
});
