import React from "react";
import ReactDOM from "react-dom";
import "./index.css"

const Square = () => {
  return (
    <div className="squareCanvas">
      X
    </div>
  );
};

const Board = () => {
  return (
    <div style={{
      backgroundColor: "#283547",
      margin: 10,
      padding: 20,
    }}>
      Board
      <div className="boardCanvas">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="boardCanvas">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="boardCanvas">
        <Square />
        <Square />
        <Square />
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