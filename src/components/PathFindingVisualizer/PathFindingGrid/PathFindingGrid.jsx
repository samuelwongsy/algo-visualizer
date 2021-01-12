import React, { useState, useEffect } from "react";
import Node from "./Node/Node";
import "./Grid.css";

function PathFindingGrid(props) {
  const [mouseDown, setMouseDown] = useState(false);
  const { grid, setGrid, getNewGridWithWallToggled } = props;

  // useEffect(() => {
  //   for (let row = 0; row < grid.length; row++) {
  //     for (let col = 0; col < grid[0].length; col++) {
  //       document.getElementById(`node-${row}-${col}`).className = "node";
  //     }
  //   }
  // }, [grid]);

  const handleMouseDown = (row, col) => {
    const newGrid = getNewGridWithWallToggled(grid, row, col);
    setMouseDown(true);
    setGrid(newGrid);
  };

  const handleMouseEnter = (row, col) => {
    if (!mouseDown) return;
    const newGrid = getNewGridWithWallToggled(grid, row, col);
    setGrid(newGrid);
  };

  const handleMouseUp = () => {
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
                  isVisited={node.visitedClass}
                  // mousePressed={mouseDown}
                  onMouseDown={(row, col) => handleMouseDown(row, col)}
                  onMouseEnter={(row, col) => handleMouseEnter(row, col)}
                  onMouseUp={() => handleMouseUp()}
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


export default PathFindingGrid;
