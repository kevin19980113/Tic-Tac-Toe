/* eslint-disable react/prop-types */
import { createPortal } from "react-dom";
import classes from "./Gameover.module.css";
import { forwardRef, useImperativeHandle, useRef } from "react";
import { useGameContext } from "../context/GameContext";

const Gameover = forwardRef(function Gameover({ winner, isDraw }, ref) {
  const dialog = useRef();
  const gameCtx = useGameContext();

  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });

  function hendleClose(event) {
    gameCtx.reset(event);
    dialog.current.close();
  }

  return createPortal(
    <dialog
      className={classes.gameover}
      ref={dialog}
      onClose={(event) => hendleClose(event)}
      onSubmit={(event) => hendleClose(event)}
    >
      <form>
        <h2>Game Over!!</h2>
        {winner && (
          <p>
            Congrats!!{" "}
            <span>
              winner is <strong>{winner}</strong>
            </span>
          </p>
        )}
        {isDraw && <p>It's a draw</p>}
        <button>Play Again</button>
      </form>
    </dialog>,
    document.getElementById("modal")
  );
});

export default Gameover;
