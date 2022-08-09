import React from "react";
import ReactDOM from "react-dom";
import "./index.css"

const Game = () => {
  return (
    <div style={{
      backgroundColor: "#202C37",
      margin: 10,
      padding: 20,
    }}>
      Game
    </div>
  );
};

ReactDOM.render(
  <Game />,
  document.getElementById("root")
);