import React, { useState } from "react";
import "./Node.css";

function Node(props) {
  const {
    row,
    col,
    isFinish,
    isStart,
    isWall,
    onMouseDown,
    onMouseOver,
    onMouseUp
  } = props;

  const [delayHandler, setDelayHandler] = useState(null);

  const handleMouseEnter = (row, col) => {
    setDelayHandler(
      setTimeout(() => {
        onMouseOver(row, col);
      }, 0.2)
    );
  };

  const handleMouseLeave = () => {
    clearTimeout(delayHandler);
  };

  const extraClassName = isFinish
    ? "node-finish"
    : isStart
    ? "node-start"
    : isWall
    ? "node-wall"
    : "";

  return (
    <div
      id={`node-${row}-${col}`}
      className={`node ${extraClassName}`}
      onMouseDown={() => onMouseDown(row, col)}
      onMouseEnter={() => handleMouseEnter(row, col)}
      onMouseLeave={handleMouseLeave}
      onMouseUp={() => onMouseUp(row, col)}
    ></div>
  );
}

export default Node;
