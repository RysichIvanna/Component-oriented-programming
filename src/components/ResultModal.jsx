import React from "react";
import "../styles/game.css";

export default function ResultModal({ winner, onRestart }) {
  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>{winner === "Draw" ? "Нічия!" : `Переміг ${winner}`}</h2>
        <button className="button" onClick={onRestart}>
          Нова гра
        </button>
      </div>
    </div>
  );
}
