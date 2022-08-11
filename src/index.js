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

  const initialSquares = [
    null, null, null,
    null, null, null,
    null, null, null,
  ]
  const [squares, setSquares] = useState(initialSquares);

  const clickEvent = (temp) => {
    alert(`${temp} clicked`);
  }

  const squareRender = (temp) => {
    return(
      <Square value={squares[temp]} onClickEvent={() => clickEvent(temp)} />
    );
  };

  return (
    <div style={{
      backgroundColor: "#283547",
      margin: 10,
      padding: 20,
    }}>
      Board
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
      Game
      <Board />
    </div>
  );
};

ReactDOM.render(
  <Game />,
  document.getElementById("root")
);