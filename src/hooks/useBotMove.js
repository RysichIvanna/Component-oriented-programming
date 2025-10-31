import { useEffect } from "react";
import { checkWinner } from "../utils/gameLogic";

export const useBotMove = (board, turn, winner, setBoard, setTurn) => {
  useEffect(() => {
    if (turn !== "O" || winner) return;

    const timer = setTimeout(() => {
      const emptyCells = board.map((v,i) => v === null ? i : null).filter(v => v !== null);
      if (emptyCells.length === 0) return;

      const idx = emptyCells[Math.floor(Math.random() * emptyCells.length)];
      const newBoard = [...board];
      newBoard[idx] = "O";
      setBoard(newBoard);

      const result = checkWinner(newBoard);
      if (!result) setTurn("X");
    }, 500);

    return () => clearTimeout(timer);
  }, [board, turn, winner, setBoard, setTurn]);
};
