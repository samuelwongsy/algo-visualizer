import React, { useState } from "react";
import "./Node.css";

function Node(props) {
  const {
    row,
    col,
    isFinish,
    isStart,
    isWall,
    isVisited,
    onMouseDown,
    onMouseEnter,
    onMouseUp,
  } = props;

  const extraClassName = isFinish
    ? "node-finish"
    : isStart
    ? "node-start"
    : isWall
    ? "node-wall"
    : isVisited
    ? "node-visited"
    : "";

  return (
    <div
      id={`node-${row}-${col}`}
      className={`node ${extraClassName}`}
      onMouseDown={() => onMouseDown(row, col)}
      onMouseEnter={() => onMouseEnter(row, col)}
      onMouseUp={() => onMouseUp()}
    ></div>
  );
}

export default Node;
