import React, { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { GameContainer } from "../styled/GameContainer";

export default function SettingsPage() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <GameContainer themeMode={theme}>
      <h2>Налаштування</h2>

      <label style={{ cursor: "pointer" }}>
        <input
          type="checkbox"
          checked={theme === "dark"}
          onChange={toggleTheme}
        />{" "}
        Темна тема
      </label>
    </GameContainer>
  );
}
