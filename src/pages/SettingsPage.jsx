import React, { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import "../styles/settings.css";

export default function SettingsPage() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className={`settings-page ${theme}`}>
      <h2>Налаштування гри</h2>

      <div>
        <label>
          <input
            type="checkbox"
            checked={theme === "dark"}
            onChange={toggleTheme}
          />
          Чорна тема
        </label>
      </div>
    </div>
  );
}
