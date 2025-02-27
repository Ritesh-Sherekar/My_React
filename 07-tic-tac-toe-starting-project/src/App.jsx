
import Players from "./Components/Players.jsx";
import GameBoard from "./Components/GameBoard.jsx";

function App() {
  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Players initialName="Player 1" symbol="X"/>
          <Players initialName="Player 2" symbol="O"/>
        </ol>
        <GameBoard/>
      </div>
    </main>
  );
}

export default App;
