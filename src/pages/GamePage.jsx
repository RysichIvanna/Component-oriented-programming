import React, { useState, useEffect } from "react";
import { usePlayerStore } from "../store/playerStore";
import ResultModal from "../components/ResultModal";
import GameBoard from "../components/GameBoard";
import { checkWinner } from "../utils/gameLogic";
import { useBotMove } from "../hooks/useBotMove";
import { useSaveWin } from "../hooks/useSaveWin";

export default function GamePage() {
  const { userId, player1 } = usePlayerStore();

  const [board, setBoard] = useState(Array(9).fill(null));
  const [turn, setTurn] = useState("X");
  const [winner, setWinner] = useState(null);

  const saveWin = useSaveWin(userId, player1);

  useBotMove(board, turn, winner, setBoard, setTurn);

  useEffect(() => {
    const result = checkWinner(board);

    if (result === "X" || result === "O") {
      setWinner(result);
      if (result === "X") saveWin();
    } else if (!board.includes(null)) {
      setWinner("draw");
    }
  }, [board]);

  const handleCellClick = (index) => {
    if (board[index] || winner || turn === "O") return;

    const newBoard = [...board];
    newBoard[index] = "X";
    setBoard(newBoard);
    setTurn("O");
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setTurn("X");
    setWinner(null);
  };

  return (
    <div className="game-container">
      <h2>Гравець: {player1}</h2>

      <GameBoard board={board} onCellClick={handleCellClick} />

      <button className="button" onClick={resetGame}>
        Почати заново
      </button>

      {winner && (
        <ResultModal
          winner={
            winner === "X" ? player1
              : winner === "O" ? "Бот"
              : "Нічия"
          }
          onRestart={resetGame}
        />
      )}
    </div>
  );
}
