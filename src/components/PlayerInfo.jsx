/* eslint-disable react/prop-types */
import classes from "./PlayerInfo.module.css";
import { useState } from "react";
import { useGameContext } from "../context/GameContext";

export default function PlayerInfo({ playerName, playerSymbol }) {
  const [isEditing, setIsEditing] = useState(false);
  const gameCtx = useGameContext();

  function handleChange(event) {
    gameCtx.editPlayerName(playerName, event.target.value);
  }

  function editorSavePlayerName() {
    setIsEditing((prevIsEditing) => !prevIsEditing);
  }

  let playerClassName = `${classes.player}`;

  if (gameCtx.gameturn === playerSymbol) {
    playerClassName = `${classes.player} ${classes.active}`;
  }

  return (
    <li className={playerClassName}>
      {isEditing ? (
        <>
          <input
            className={classes.playerName}
            value={playerName}
            onChange={handleChange}
            required
          />{" "}
          <span className={classes.playerSymbol}>{playerSymbol}</span>
        </>
      ) : (
        <>
          <span className={classes.playerName}>{playerName}</span>
          <span className={classes.playerSymbol}>{playerSymbol}</span>
        </>
      )}

      <button onClick={editorSavePlayerName}>
        {isEditing ? "Save" : "Edit"}
      </button>
    </li>
  );
}
