import Header from "./components/Header.jsx";
import Game from "./components/Game.jsx";
import GameConextProvider from "./context/GameContext.jsx";

function App() {
  return (
    <main>
      <Header />
      <GameConextProvider>
        <Game />
      </GameConextProvider>
    </main>
  );
}

export default App;
