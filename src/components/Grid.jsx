import React, { useState, useEffect } from "react";
import Node from "./Node";
import bfs, {
  getNodesInShortestPathOrder
} from "../algorithms/breath-first-search";

const START_NODE_ROW = 10;
const START_NODE_COL = 5;
const FINISH_NODE_ROW = 10;
const FINISH_NODE_COL = 45;

function Grid() {
  const [nodes, setNodes] = useState(getInitialGrid());

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
    const grid = nodes;
    const startNode = grid[START_NODE_ROW][START_NODE_COL];
    const finishNode = grid[FINISH_NODE_ROW][FINISH_NODE_COL];
    const visitedNodesInOrder = bfs(grid, startNode, finishNode);
    console.log(visitedNodesInOrder);
  };

  return (
    <div>
      <button onClick={visualizeBFS}>Visualize</button>
      <div>
        {nodes.map((row, rowIndex) => {
          return (
            <div key={rowIndex}>
              {row.map((node, colIndex) => (
                <Node
                  key={[node.col, node.row]}
                  isStart={node.isStart}
                  isFinish={node.isFinish}
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

export default Grid;
