export default function GameBoard({ board, onCellClick }) {
  return (
    <div className="game-board">
      {board.map((cell,i) => (
        <div key={i} className="cell" onClick={() => onCellClick(i)}>
          {cell}
        </div>
      ))}
    </div>
  );
}
