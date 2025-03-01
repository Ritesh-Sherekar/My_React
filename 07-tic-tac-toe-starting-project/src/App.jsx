import { useState } from "react";
import { WINNING_COMBINATIONS } from "./WINNING_COMBINATIONS.JS";

import Players from "./Components/Players.jsx";
import GameBoard from "./Components/GameBoard.jsx";
import Log from "./Components/Log.jsx";

function driveActivePlayer(gameTurns){
  let currentPlayer = "X";

  if (gameTurns.length > 0 && gameTurns[0].player === "X") {
    currentPlayer = "O";
  }
  return currentPlayer;
}

function App() {
  const [gameTurns, setGameTurn] = useState([]);
  //const [activePlayer, setActivePlayer] = useState('X');

  const activePlayer = driveActivePlayer(gameTurns);

  function hendleSelectSquare(rowIndex, colIndex) {
    // setActivePlayer((currentActivePlayer) =>
    //   currentActivePlayer === "X" ? "O" : "X"
    // );
    setGameTurn((prevTurns) => {
      const currentPlayer = driveActivePlayer(prevTurns);

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
        <GameBoard onSelectSquare={hendleSelectSquare} turns={gameTurns} />
      </div>
      <Log turn={gameTurns} />
    </main>
  );
}

export default App;
