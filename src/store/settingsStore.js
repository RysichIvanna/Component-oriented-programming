import { create } from "zustand";

export const useSettingsStore = create((set) => ({
  theme: localStorage.getItem("theme") || "light",
  setTheme: (value) => {
    localStorage.setItem("theme", value);
    set({ theme: value });
  },
  toggleTheme: () => set((state) => {
    const next = state.theme === "light" ? "dark" : "light";
    localStorage.setItem("theme", next);
    return { theme: next };
  }),
}));
