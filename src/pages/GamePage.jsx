import React, { useContext, useState, useEffect } from "react";
import { useSettingsStore } from "../store/settingsStore";
import { GameContainer } from "../styled/GameContainer";
import { Board } from "../styled/Board";
import { Cell } from "../styled/Cell";
import { Button } from "../styled/Button";
import ResultModal from "../components/ResultModal";
import { usePlayerStore } from "../store/playerStore";
import { checkWinner } from "../utils/gameLogic";
import { useSaveWin } from "../hooks/useSaveWin";
import { useBotMove } from "../hooks/useBotMove";

export default function GamePage() {
  const { theme } = useSettingsStore();
  const { player1, userId } = usePlayerStore();

  const [board, setBoard] = useState(Array(9).fill(null));
  const [turn, setTurn] = useState("X");
  const [winner, setWinner] = useState(null);

  const saveWin = useSaveWin(userId, player1);
  useBotMove(board, turn, winner, setBoard, setTurn);

  useEffect(() => {
    const r = checkWinner(board);
    if (r === "X" || r === "O") {
      setWinner(r);
      if (r === "X") saveWin();
    } else if (!board.includes(null)) {
      setWinner("draw");
    }
  }, [board]);

  const click = i => {
    if (board[i] || winner || turn === "O") return;
    const c = [...board];
    c[i] = "X";
    setBoard(c);
    setTurn("O");
  };

  const reset = () => {
    setBoard(Array(9).fill(null));
    setTurn("X");
    setWinner(null);
  };

  return (
    <GameContainer themeMode={theme}>
      <h2>Гравець: {player1}</h2>

      <Board>
        {board.map((value, i) => (
          <Cell key={i} themeMode={theme} onClick={() => click(i)}>
            {value}
          </Cell>
        ))}
      </Board>

      <Button themeMode={theme} onClick={reset}>
        Почати заново
      </Button>

      {winner && (
        <ResultModal
          winner={
            winner === "X"
              ? player1
              : winner === "O"
              ? "Бот"
              : "Нічия"
          }
          onRestart={reset}
        />
      )}
    </GameContainer>
  );
}
