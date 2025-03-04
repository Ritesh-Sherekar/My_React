import { useState } from "react";
import { WINNING_COMBINATIONS } from "./WINNING_COMBINATIONS.JS";

import Players from "./Components/Players.jsx";
import GameBoard from "./Components/GameBoard.jsx";
import Log from "./Components/Log.jsx";
import GameOver from "./Components/GameOver.jsx";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function driveActivePlayer(gameTurns) {
  let currentPlayer = "X";

  if (gameTurns.length > 0 && gameTurns[0].player === "X") {
    currentPlayer = "O";
  }
  return currentPlayer;
}

function App() {
  const [playerss , setPlayerss] = useState({X :'Player 1' , O: 'Player 2'});
  const [gameTurns, setGameTurn] = useState([]);
  //const [activePlayer, setActivePlayer] = useState('X');

  const activePlayer = driveActivePlayer(gameTurns);

  let gameBoard = [...initialGameBoard.map(array => [...array])];

  for (const turn of gameTurns) {
    const { square, player } = turn;
    const { row, col } = square;

    gameBoard[row][col] = player;
  }

  let winner = null;
  for (const combiation of WINNING_COMBINATIONS) {
    const firstSquareSymbol =
      gameBoard[combiation[0].row][combiation[0].column];
    const secondSquareSymbol =
      gameBoard[combiation[1].row][combiation[1].column];
    const thirdSquareSymbol =
      gameBoard[combiation[2].row][combiation[2].column];

    if (
      firstSquareSymbol &&
      firstSquareSymbol === secondSquareSymbol &&
      firstSquareSymbol === thirdSquareSymbol
    ) {
      winner = playerss[firstSquareSymbol];
    }
  }

  const hasDraw = gameTurns.length === 9 && !winner;

  function hendleSelectSquare(rowIndex, colIndex) {
    setGameTurn((prevTurns) => {
      const currentPlayer = driveActivePlayer(prevTurns);

      const updatedTurns = [
        { square: { row: rowIndex, col: colIndex }, player: currentPlayer },
        ...prevTurns,
      ];
      return updatedTurns;
    });
  }

  function handleReset(){
    setGameTurn([]);
  }

  function handlePlayerNameChange(symbol , newName){
    setPlayerss(prevPlayer =>{
      return {
        ...prevPlayer,
        [symbol] : newName
      };
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
            onChangeName={handlePlayerNameChange}
          />
          <Players
            initialName="Player 2"
            symbol="O"
            isActive={activePlayer === "O"}
            onChangeName={handlePlayerNameChange}
          />
        </ol>
        {(winner || hasDraw) && (<GameOver winner={winner}  onReset={handleReset}/>)}
        <GameBoard onSelectSquare={hendleSelectSquare} boards={gameBoard} />
      </div>
      <Log turn={gameTurns} />
    </main>
  );
}

export default App;
