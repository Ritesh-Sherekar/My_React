import { useState } from "react";
import Players from "./Components/Players.jsx";
import GameBoard from "./Components/GameBoard.jsx";

function App() {
  const [gameTurns, setGameTurn] = useState([]);
  const [activePlayer, setActivePlayer] = useState('X');

  function hendleSelectSquare(rowIndex, colIndex) {
    setActivePlayer((currentActivePlayer) =>
      currentActivePlayer === "X" ? "O" : "X"
    );
    setGameTurn((prevTurns) => {
      let currentPlayer = 'X';

      if(prevTurns.length > 0 && prevTurns[o].player === 'X'){
        currentPlayer = 'O';
      }

      const updatedTurns = [
        { square: { row: rowIndex, col: colIndex }, player: currentPlayer },
        ...prevTurns,
      ];
      return updatedTurns;
    });
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Players
            initialName="Player 1"
            symbol="X"
            isActive={activePlayer === "X"}
          />
          <Players
            initialName="Player 2"
            symbol="O"
            isActive={activePlayer === "O"}
          />
        </ol>
        <GameBoard
          onSelectSquare={hendleSelectSquare}
          turns={gameTurns}
        />
      </div>
    </main>
  );
}

export default App;
