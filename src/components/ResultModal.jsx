import React, { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

import { ModalOverlay, ModalBox } from "../styled/Modal";
import { Button } from "../styled/Button";

export default function ResultModal({ winner, onRestart }) {
  const { theme } = useContext(ThemeContext);

  return (
    <ModalOverlay>
      <ModalBox themeMode={theme}>
        <h2>{
          winner === "Draw" ? "Нічия!" : `Переміг ${winner}`
        }</h2>

        <Button themeMode={theme} onClick={onRestart}>
          Нова гра
        </Button>
      </ModalBox>
    </ModalOverlay>
  );
}
