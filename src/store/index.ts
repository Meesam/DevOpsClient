import { create } from "zustand";
import { AuthSlice, createAuthSlice } from "./authStore";
import { devtools } from "zustand/middleware";

export const useStore = create<AuthSlice>()(
  devtools((...state) => ({
    ...createAuthSlice(...state),
  }))
);
