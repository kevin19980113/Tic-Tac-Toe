/* eslint-disable react/prop-types */
import { createContext, useState, useContext } from "react";

export const GameContext = createContext({
  players: [
    {
      playerName: "",
      playerSymbol: "",
    },
    {
      playerName: "",
      playerSymbol: "",
    },
  ],

  board: [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ],
  gameturn: "",
  turns: 0,
  editPlayerName: () => {},
  turnChange: () => {},
  updateBoard: () => {},
  reset: () => {},
});

export default function GameConextProvider({ children }) {
  const [players, setPlayers] = useState([
    {
      playerName: "Player 1",
      playerSymbol: "X",
    },
    {
      playerName: "Player 2",
      playerSymbol: "O",
    },
  ]);
  const [gameturn, setGameturn] = useState(players[0].playerSymbol);
  const [turns, setTurns] = useState(0);
  const [board, setBoard] = useState([
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ]);

  function editPlayerName(playerName, newName) {
    setPlayers((prevPlayers) => {
      return prevPlayers.map((player) => {
        if (player.playerName === playerName) {
          return {
            ...player,
            playerName: newName,
          };
        }
        return player;
      });
    });
  }

  function turnChange() {
    setGameturn((prevGameturn) => {
      if (prevGameturn === players[0].playerSymbol) {
        return players[1].playerSymbol;
      }
      return players[0].playerSymbol;
    });
  }

  function updateBoard(row, col, playerSymbol) {
    setBoard((prevBoard) => {
      const newBoard = [...prevBoard];
      newBoard[row][col] = playerSymbol;
      return newBoard;
    });
    setTurns((prevTurns) => prevTurns + 1);
  }

  function reset(event) {
    event.preventDefault();
    setBoard([
      ["", "", ""],
      ["", "", ""],
      ["", "", ""],
    ]);
    setTurns(0);
  }

  const gamecontext = {
    players: players,
    board: board,
    gameturn: gameturn,
    turns: turns,
    editPlayerName,
    turnChange,
    updateBoard,
    reset,
  };

  return (
    <GameContext.Provider value={gamecontext}>{children}</GameContext.Provider>
  );
}

export function useGameContext() {
  const ctx = useContext(GameContext);

  return ctx;
}
