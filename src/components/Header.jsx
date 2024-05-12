import classes from "./Header.module.css";
import gameLogo from "../assets/tic-tac-toe-game.svg";
export default function Header() {
  return (
    <header className={classes.header}>
      <img src={gameLogo} alt="Tic Tac Toe game image" />
      <h1>Tic Tac Toe Game</h1>
      <h3>welcome!</h3>
    </header>
  );
}
