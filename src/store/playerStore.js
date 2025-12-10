import { create } from "zustand";

export const usePlayerStore = create((set) => ({
  userId: null,
  player1: "",
  
  setPlayer: (userId, player1) =>
    set({ userId, player1 }),

  resetPlayer: () =>
    set({ userId: null, player1: "" }),
}));
