import { WINNING_COMBINATIONS } from "./winningCombination.js";

export default function deriveWinner(board, players) {
  let winner;

  for (const combination of WINNING_COMBINATIONS) {
    const firstSymbol = board[combination[0].row][combination[0].col];
    const secondSymbol = board[combination[1].row][combination[1].col];
    const thirdSymbol = board[combination[2].row][combination[2].col];

    if (
      firstSymbol === secondSymbol &&
      secondSymbol === thirdSymbol &&
      firstSymbol !== ""
    ) {
      winner = players.find((player) => player.playerSymbol === firstSymbol);
      winner = winner.playerName;
    }
  }
  return winner;
}
