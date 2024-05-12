import classes from "./Game.module.css";
import PlayerInfo from "./PlayerInfo";
import GameBoard from "./GameBoard";
import Gameover from "./Gameover";
import { useGameContext } from "../context/GameContext";
import { useRef } from "react";
import deriveWinner from "../deriveWinner";

export default function Game() {
  const gameCtx = useGameContext();
  const dialog = useRef();
  const winner = deriveWinner(gameCtx.board, gameCtx.players);
  const isDraw = gameCtx.turns === 9 && !winner;

  if (isDraw || winner) {
    dialog.current.open();
  }

  return (
    <>
      <Gameover ref={dialog} winner={winner} isDraw={isDraw} />
      <div className={classes.gameContainer}>
        <ol className={classes.players}>
          <PlayerInfo
            playerName={gameCtx.players[0].playerName}
            playerSymbol={gameCtx.players[0].playerSymbol}
          />
          <PlayerInfo
            playerName={gameCtx.players[1].playerName}
            playerSymbol={gameCtx.players[1].playerSymbol}
          />
        </ol>
        <GameBoard />
      </div>
    </>
  );
}
