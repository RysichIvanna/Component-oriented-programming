import { create } from "zustand";

export const usePlayerStore = create((set) => ({
  userId: null,
  player1: "",
  mode: "bot",
  
  setPlayer: (userId, player1, mode = "bot") =>
    set({ userId, player1, mode }),

  resetPlayer: () =>
    set({ userId: null, player1: "", mode: "bot" }),
}));
