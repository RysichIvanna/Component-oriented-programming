import React, { useContext } from "react";
import { useSettingsStore } from "../store/settingsStore";


import { ModalOverlay, ModalBox } from "../styled/Modal";
import { Button } from "../styled/Button";

export default function ResultModal({ winner, onRestart }) {
  const { theme } = useSettingsStore();

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
