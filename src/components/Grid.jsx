import React, { useState, useEffect } from "react";
import Node from "./Node";
import "./Grid.css";
import bfs from "../algorithms/breath-first-search";

const START_NODE_ROW = 10;
const START_NODE_COL = 5;
const FINISH_NODE_ROW = 10;
const FINISH_NODE_COL = 45;

function Grid() {
  const [grid, setGrid] = useState(getInitialGrid());
  const [mouseDown, setMouseDown] = useState(false);

  // useEffect(() => {
  //   for (let row = 0; row < 20; row++) {
  //     const currentRow = [];
  //     for (let col = 0; col < 50; col++) {
  //       const currentNode = createNode(col, row);
  //       currentRow.push(currentNode);
  //     }
  //     setNodes(prevArray => [...prevArray, currentRow]);
  //   }
  // }, []);

  const visualizeBFS = () => {
    const copyOfGrid = grid;
    const startNode = copyOfGrid[START_NODE_ROW][START_NODE_COL];
    const finishNode = copyOfGrid[FINISH_NODE_ROW][FINISH_NODE_COL];
    const [visitedNodesInOrder, nodesInShortestPathOrder] = bfs(
      copyOfGrid,
      startNode,
      finishNode
    );
    animateBFS(visitedNodesInOrder, nodesInShortestPathOrder);
  };

  const animateBFS = (visitedNodesInOrder, nodesInShortestPathOrder) => {
    for (let i = 0; i <= visitedNodesInOrder.length; i++) {
      if (i === visitedNodesInOrder.length) {
        setTimeout(() => {
          animateShortestPath(nodesInShortestPathOrder);
        }, 20 * i);
        return;
      } else {
        setTimeout(() => {
          const node = visitedNodesInOrder[i];
          document.getElementById(`node-${node.row}-${node.col}`).className =
            "node node-visited";
        }, 20 * i);
      }
    }
  };

  const animateShortestPath = nodesInShortestPathOrder => {
    for (let j = 0; j < nodesInShortestPathOrder.length; j++) {
      setTimeout(() => {
        const node = nodesInShortestPathOrder[j];
        document.getElementById(`node-${node.row}-${node.col}`).className =
          "node node-shortest";
      }, 50 * j);
    }
  };

  const clearGrid = () => {
    setGrid(getInitialGrid());
  };

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

  return (
    <div>
      <div className="grid">
        <button onClick={visualizeBFS}> Visualize </button>
        <button onClick={clearGrid}> Clear </button>
      </div>
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
                  onMouseEnter={handleMouseOver}
                  onMouseUp={handleMouseUp}
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

const getInitialGrid = () => {
  const grid = [];
  for (let row = 0; row < 20; row++) {
    const currentRow = [];
    for (let col = 0; col < 50; col++) {
      const currentNode = createNode(col, row);
      currentRow.push(currentNode);
    }
    grid.push(currentRow);
  }
  return grid;
};

const createNode = (col, row) => {
  return {
    col,
    row,
    isStart: row === START_NODE_ROW && col === START_NODE_COL,
    isFinish: row === FINISH_NODE_ROW && col === FINISH_NODE_COL,
    distance: Infinity,
    isVisited: false,
    isWall: false,
    previousNode: null
  };
};

const getNewGridWithWallToggled = (grid, row, col) => {
  const newGrid = grid.slice();
  const node = newGrid[row][col];
  const newNode = {
    ...node,
    isWall: !node.isWall
  };
  newGrid[row][col] = newNode;
  return newGrid;
};

export default Grid;
