import React from "react";
import ReactDOM from "react-dom";
import { useState } from "react";
import "./index.css"

const Square = (props) => {

  return (
    <button className="squareCanvas" onClick={props.onClickEvent}>
      {props.value}
    </button>
  );
};

const Board = () => {

  // const initialSquares = [
  //   null, null, null,
  //   null, null, null,
  //   null, null, null,
  // ]

  const initialSquares = Array(9).fill(null);
  const [squares, setSquares] = useState(initialSquares);
  const [xMove, setXMove] = useState(true);

  const clickEvent = (temp) => {
    // alert(`${temp} clicked`);
    // 1. make a copy of squares state array
    const newSquares = [...squares];
    // 2. mutate copy, setting the i-th element to 'X'
    newSquares[temp] = xMove ? "X":"O";
    // 3. Call the setSquare function with the mutated copy
    setSquares(newSquares);
    setXMove(!xMove);
  }

  const squareRender = (temp) => {
    return(
      <Square value={squares[temp]} onClickEvent={() => clickEvent(temp)} />
    );
  };

  const winningPlayer = winnerCheck(squares);
  const status = winningPlayer ? `Winner: ${winningPlayer}` : `Next Player: ${xMove ? "X":"O"}`;

  return (
    <div className="gridCanvas">
      {/* Board */}
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
    </div>
  );
};

const Game = () => {
  return (
    <div className="gameCanvas">
      Tic-Tac-Toe
      <Board />
    </div>
  );
};

ReactDOM.render(
  <Game />,
  document.getElementById("root")
);

function winnerCheck(squares) {
  const lines = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
    [0, 4, 8], [2, 4, 6] // diagonal
  ];

  for (let temp of lines){
    const [a, b, c] = temp;

    if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c]){
      return squares[a]; // X or O
    }
  }

  return null;
}