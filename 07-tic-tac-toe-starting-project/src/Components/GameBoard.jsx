<<<<<<< HEAD
export default function GameBoard({onSelectSquare, boards}){
    return (
        <ol id="game-board">
             {boards.map((row, rowIndex) => (
=======
export default function GameBoard({onSelectSquare, board}){
    return (
        <ol id="game-board">
            {board.map((row , rowIndex) =>(
>>>>>>> b4fd8dc (Added new projects and updated existing files)
                <li key={rowIndex}>
                   <ol>
                    {row.map((playerSymbol , colIndex) =>(
                        <li key={colIndex}>
                            <button onClick={() => onSelectSquare(rowIndex , colIndex)} disabled={playerSymbol != null}>{playerSymbol}</button>
                        </li>
                    ))}
                   </ol>
                </li>
            ))}
        </ol>
    );
}