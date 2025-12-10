import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { usePlayerStore } from "../store/playerStore";
import { GameContainer } from "../styled/GameContainer";
import { Input } from "../styled/Input";
import { Button } from "../styled/Button";
import { getClientId } from "../utils/clientId";
import { useSettingsStore } from "../store/settingsStore";

export default function StartPage() {
  const { theme } = useSettingsStore();
  const [name, setName] = useState("");
  const [contactName, setContactName] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const setPlayer = usePlayerStore((state) => state.setPlayer);

  const handleStart = () => {
    if (!name) return;
    const userId = getClientId();
    setPlayer(userId, name);
    navigate(`/game/${userId}`);
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    alert(`Ім'я: ${contactName}\nEmail: ${contactEmail}\nПовідомлення: ${message}`);
    setContactName("");
    setContactEmail("");
    setMessage("");
  };

  return (
    <GameContainer themeMode={theme}>
      <h2>Гра проти бота</h2>

      <Input
        themeMode={theme}
        value={name}
        placeholder="Нік"
        onChange={(e) => setName(e.target.value)}
      />
      <Button themeMode={theme} onClick={handleStart}>
        Почати гру
      </Button>

      <div style={{ marginTop: "20px", display: "flex", gap: "10px" }}>
        <Button themeMode={theme} onClick={() => navigate("/results")}>
          Таблиця результатів
        </Button>
        <Button themeMode={theme} onClick={() => navigate("/settings")}>
          Налаштування гри
        </Button>
      </div>

      <div style={{ marginTop: "40px", width: "100%", maxWidth: "400px" }}>
        <h3>Контактна форма</h3>
        <form onSubmit={handleContactSubmit}>
          <Input
            themeMode={theme}
            value={contactName}
            placeholder="Ім'я"
            onChange={(e) => setContactName(e.target.value)}
            style={{ marginBottom: "10px" }}
          />
          <Input
            themeMode={theme}
            value={contactEmail}
            placeholder="Email"
            onChange={(e) => setContactEmail(e.target.value)}
            style={{ marginBottom: "10px" }}
          />
          <Input
            themeMode={theme}
            value={message}
            placeholder="Повідомлення"
            onChange={(e) => setMessage(e.target.value)}
            style={{ marginBottom: "10px" }}
          />
          <Button themeMode={theme} type="submit">
            Відправити
          </Button>
        </form>
      </div>
    </GameContainer>
  );
}
