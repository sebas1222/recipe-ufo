import { create } from "zustand";
import { persist } from "zustand/middleware";

type userTokenState = {
  userToken: string;
  setToken: (token: string) => void;
};

export const useUserTokenState = create(
  persist<userTokenState>(
    (set) => ({
      userToken: "",
      setToken: (token: string) =>
        set({
          userToken: token,
        }),
    }),
    {
      name: "user-token",
    }
  )
);
