import React from "react";
import ReactDOM from "react-dom";
import { useState } from "react";
import "./index.css"

// Square component: thru props, display value of specific square: null, X or O 
const Square = (props) => {
  return (
    <button className="squareCanvas" onClick={props.onClickEvent}>
      {props.value}
    </button>
  );
};

// Board component: contains main game dynamics
const Board = () => {

  // const initialSquares = [
  //   null, null, null,
  //   null, null, null,
  //   null, null, null,
  // ]
  // simulate tic-tac-toe board: index 0-8 filled with null
  const initialSquares = Array(9).fill(null);

  // initialize squares with null and initial player with X as true
  const [squares, setSquares] = useState(initialSquares);
  const [xMove, setXMove] = useState(true);

  // Function to reset game 
  const resetBoard = () => {
    setSquares(Array(9).fill(null)); // Reset game state array to nulls
    setXMove(true); // Reset initial player to "X"
  }

  // click event on tic-tac-toe squares
  const clickEvent = (temp) => {
    const newSquares = [...squares]; // copy current squares state array
    const winnerTemp = Boolean(winnerCheck(newSquares)); // check if game is won
    const squareFilled = Boolean(newSquares[temp]); // check if square if already played

    // Ignore click handler if game won or square previously played
    if (winnerTemp || squareFilled){
      return;
    }

    newSquares[temp] = xMove ? "X":"O"; // update null square value to choosen player
    setSquares(newSquares); // update game board state
    setXMove(!xMove); // update/swap to next player state
  }

  // Output game data: winner, no-winner, who the next player
  let status;
  const winningPlayer = winnerCheck(squares);

  if (winningPlayer){
    status = `Winner: ${winningPlayer}`; // executes if a player won
  }
  else if (squares.includes(null) === false){
    status = `Game Over. No Winner!`; // executes when no moves left, no winners
  }
  else{
    status = `Next Player: ${xMove ? "X":"O"}`; // outputs next player move
  }

  // Render the through the Square component, passing values: null, X or O 
  const squareRender = (temp) => {
    return(
      <Square value={squares[temp]} onClickEvent={() => clickEvent(temp)} />
    );
  };

  // render 9 block game canvas, including output status and reset button
  return (
    <div className="gridCanvas">
      <div className="statusCanvas">{status}</div>
      <div className="boardCanvas">
        {squareRender(0)}
        {squareRender(1)}
        {squareRender(2)}
      </div>
      <div className="boardCanvas">
        {squareRender(3)}
        {squareRender(4)}
        {squareRender(5)}
      </div>
      <div className="boardCanvas">
        {squareRender(6)}
        {squareRender(7)}
        {squareRender(8)}
      </div>
      <div className="resetButton">
        <button onClick={() => resetBoard()}>RESET</button>
      </div>
    </div>
  );
};

// Initial component: Title and calling Board component
const Game = () => {
  return (
    <div className="gameCanvas">
      <div className="headerBox"><h1>Tic-Tac-Toe</h1></div>
      <Board />
    </div>
  );
};

// Root element
ReactDOM.render(
  <Game />,
  document.getElementById("root")
);

// component to check winner, has copied array values
function winnerCheck(squares) {
  // Winning combinations
  const lines = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
    [0, 4, 8], [2, 4, 6] // diagonal
  ];

  for (let temp of lines){
    const [a, b, c] = temp;
    // returns winning player if winning combinations is met
    if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c]){
      return squares[a]; // X or O
    }
  }

  return null;
}