import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ThemeContext } from "../contexts/ThemeContext";
import { usePlayerStore } from "../store/playerStore";
import { getClientId } from "../utils/clientId";

import { GameContainer } from "../styled/GameContainer";
import { Input } from "../styled/Input";
import { Button } from "../styled/Button";

export default function StartPage() {
  const [name, setName] = useState("");
  const { theme } = useContext(ThemeContext);
  const navigate = useNavigate();
  const setPlayer = usePlayerStore(s => s.setPlayer);

  const start = () => {
    if (!name) return;
    const id = getClientId();
    setPlayer(id, name, "bot");
    navigate(`/game/${id}`);
  };

  return (
    <GameContainer themeMode={theme}>
      <h2>Гра проти бота</h2>

      <Input
        themeMode={theme}
        value={name}
        placeholder="Нік"
        onChange={e => setName(e.target.value)}
      />

      <Button themeMode={theme} onClick={start}>
        Почати гру
      </Button>

      <Button themeMode={theme} onClick={() => navigate("/results")}>
        Таблиця результатів
      </Button>

      <Button themeMode={theme} onClick={() => navigate("/settings")}>
        Налаштування гри
      </Button>
    </GameContainer>
  );
}
