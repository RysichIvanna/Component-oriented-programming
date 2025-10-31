import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getClientId } from "../utils/clientId";
import { usePlayerStore } from "../store/playerStore";

export default function StartPage() {
  const [name, setName] = useState("");
  const navigate = useNavigate();
  const setPlayer = usePlayerStore((state) => state.setPlayer);

  const handleStart = () => {
    if (!name) return;

    const userId = getClientId();
    setPlayer(userId, name, "bot");
    navigate(`/game/${userId}`);
  };

  return (
    <div className="game-container">
      <h2>Гра проти бота</h2>
      <input
        type="text"
        placeholder="Нік 1"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button className="button" onClick={handleStart}>
        Почати гру
      </button>

      <button
        className="button"
        style={{ marginTop: "20px" }}
        onClick={() => navigate("/results")}
      >
        Таблиця результатів
      </button>

      <button
        className="button"
        style={{ marginTop: "10px" }}
        onClick={() => navigate("/settings")}
      >
        Налаштування гри
      </button>
    </div>
  );
}
