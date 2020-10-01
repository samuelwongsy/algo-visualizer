import React, { useState, useEffect } from "react";
import Node from "./Node";
import "./Grid.css";

function PathFindingGrid(props) {
  const [mouseDown, setMouseDown] = useState(false);
  const { grid, setGrid } = props;

  useEffect(() => {
    for (let row = 0; row < grid.length; row++) {
      for (let col = 0; col < grid[0].length; col++) {
        document.getElementById(`node-${row}-${col}`).className = "node";
      }
    }
  }, [grid]);

  const handleMouseDown = (row, col) => {
    const newGrid = getNewGridWithWallToggled(grid, row, col);
    setMouseDown(true);
    setGrid(newGrid);
  };

  const handleMouseOver = (row, col) => {
    if (!mouseDown) return;
    const newGrid = getNewGridWithWallToggled(grid, row, col);
    setGrid(newGrid);
  };

  const handleMouseUp = (row, col) => {
    setMouseDown(false);
  };

  const handleClick = (row, col) => {
    const newGrid = getNewGridWithWallToggled(grid, row, col);
    setGrid(newGrid);
  };

  return (
    <div>
      <div className="grid">
        {grid.map((row, rowIndex) => {
          return (
            <div key={rowIndex} className="row">
              {row.map((node, colIndex) => (
                <Node
                  key={[node.col, node.row]}
                  isStart={node.isStart}
                  isFinish={node.isFinish}
                  isWall={node.isWall}
                  onMouseDown={handleMouseDown}
                  onMouseOver={handleMouseOver}
                  onMouseUp={handleMouseUp}
                  onClick={handleClick}
                  row={node.row}
                  col={node.col}
                />
              ))}
            </div>
          );
        })}
      </div>
    </div>
  );
}

const getNewGridWithWallToggled = (grid, row, col) => {
  const newGrid = grid;
  const node = newGrid[row][col];
  const newNode = {
    ...node,
    isWall: true
  };
  newGrid[row][col] = newNode;
  return newGrid;
};

export default PathFindingGrid;
