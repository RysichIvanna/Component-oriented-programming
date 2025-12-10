import React from "react";
import { useSettingsStore } from "../store/settingsStore";
import { GameContainer } from "../styled/GameContainer";
import { Button } from "../styled/Button";

export default function SettingsPage() {
  const { theme, toggleTheme } = useSettingsStore();

  return (
    <GameContainer themeMode={theme}>
      <h2>Налаштування гри</h2>

      <div>
        <label>
          <input type="checkbox" checked={theme === "dark"} onChange={toggleTheme} />
          Темна тема
        </label>
      </div>
    </GameContainer>
  );
}
