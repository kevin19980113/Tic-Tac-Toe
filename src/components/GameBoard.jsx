import { useGameContext } from "../context/GameContext";
import classes from "./GameBoard.module.css";

export default function GameBoard() {
  const gameCtx = useGameContext();

  function handleGameturnChange(row, col) {
    if (gameCtx.board[row][col] === "") {
      gameCtx.updateBoard(row, col, gameCtx.gameturn);
      gameCtx.turnChange();
    }
  }

  return (
    <ol className={classes.board}>
      {gameCtx.board.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button
                  onClick={() => handleGameturnChange(rowIndex, colIndex)}
                >
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
