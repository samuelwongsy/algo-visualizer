import React, { useState, useReducer, useEffect } from "react";
import PathFindingGrid from "./PathFindingGrid";
import SideMenu from "./SideMenu";
import { Container, Grid } from "semantic-ui-react";
import bfs from "../algorithms/path-finding-algorithms/breath-first-search";
import aStarSearch from "../algorithms/path-finding-algorithms/a-star-search-queue";
import aStarSearchMinHeap from "../algorithms/path-finding-algorithms/a-star-search";
import dfs from "../algorithms/path-finding-algorithms/depth-first-search";
import recursiveDivision from "../algorithms/maze-generation-algorithms/recursive-division";
import binaryTreeMaze from "../algorithms/maze-generation-algorithms/binary-tree-maze";

const START_NODE_ROW = 10;
const START_NODE_COL = 5;
const FINISH_NODE_ROW = 10;
const FINISH_NODE_COL = 45;

export default function PathFindingVisualizer() {
  const [grid, setGrid] = useState(getInitialGrid());
  const [algoString, setAlgoString] = useState("Breadth First Search");
  const [algorithm, dispatch] = useReducer(algoReducer, bfs);

  useEffect(() => {
    dispatch({ type: algoString });
  }, [algoString]);

  const visualizeAlgorithm = () => {
    const copyOfGrid = grid;
    const algoToVisualize = algorithm;
    const startNode = copyOfGrid[START_NODE_ROW][START_NODE_COL];
    const finishNode = copyOfGrid[FINISH_NODE_ROW][FINISH_NODE_COL];
    const [visitedNodesInOrder, nodesInShortestPathOrder] = algoToVisualize(
      copyOfGrid,
      startNode,
      finishNode
    );
    animateAlgorithm(visitedNodesInOrder, nodesInShortestPathOrder);
  };

  const animateAlgorithm = (visitedNodesInOrder, nodesInShortestPathOrder) => {
    for (let i = 0; i <= visitedNodesInOrder.length; i++) {
      if (i === visitedNodesInOrder.length) {
        setTimeout(() => {
          animateShortestPath(nodesInShortestPathOrder);
        }, 20 * i);
        return;
      } else {
        setTimeout(() => {
          const node = visitedNodesInOrder[i];
          // const newGrid = getNewGridWithVisitedClass(grid, node.row, node.col);
          // setGrid(newGrid);
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
    for (let row = 0; row < grid.length; row++) {
      for (let col = 0; col < grid[0].length; col++) {
        if (grid[row][col].isStart) {
          document.getElementById(`node-${row}-${col}`).className = "node node-start";
        } else if (grid[row][col].isFinish) {
          document.getElementById(`node-${row}-${col}`).className = "node node-finish";
        } else {
          document.getElementById(`node-${row}-${col}`).className = "node";
        }
      }
    }
  };

  const handleSelection = newAlgoString => {
    setAlgoString(newAlgoString);
    console.log(newAlgoString);
  };

  const handleWallGeneration = wallString => {
    let wallAlgo = () => {};
    let startWithWalls;
    if (wallString === 'Default'){
      return;
    } else if (wallString === 'Recursive Division') {
      wallAlgo = recursiveDivision;
      startWithWalls = false;
    } else if (wallString === 'Binary Tree') {
      wallAlgo = binaryTreeMaze;
      startWithWalls = true;
    }

    const copyOfGrid = grid;
    const startNode = copyOfGrid[START_NODE_ROW][START_NODE_COL];
    const finishNode = copyOfGrid[FINISH_NODE_ROW][FINISH_NODE_COL];
    if (!startWithWalls) {
      const [newGrid, wallNodesInOrder] = wallAlgo(grid, startNode, finishNode);
      animateWallAlgo(wallNodesInOrder);
    } else {
      const [wallNodesInOrder, nodesInOrder] = wallAlgo(grid, startNode, finishNode);
      animateWallAlgo(wallNodesInOrder);
      setTimeout(() => {animateNodeAlgo(nodesInOrder)}, 20 * wallNodesInOrder.length);
    }
    
  }

  const animateNodeAlgo = (nodesInOrder) => {
    for (let i = 0; i < nodesInOrder.length; i++) {
      setTimeout(() => {
        const node = nodesInOrder[i];
        const newGrid = getNewGridWithWallToggled(grid, node.row, node.col);
        setGrid(newGrid);
        if (!(node.isStart || node.isFinish)) {
          document.getElementById(`node-${node.row}-${node.col}`).className = "node";
        };
      }, 50 * i);
    }
  }

  const animateWallAlgo = (wallNodesInOrder) => {
    for (let i = 0; i < wallNodesInOrder.length; i++) {
      setTimeout(() => {
        const node = wallNodesInOrder[i];
        const newGrid = getNewGridWithWallToggled(grid, node.row, node.col);
        setGrid(newGrid);
        document.getElementById(`node-${node.row}-${node.col}`).className =
            "node node-wall";
      }, 20 * i);
    }
  }

  return (
    <div>
      <Grid verticalAlign="middle" stackable>
        <Grid.Column width={2}>
          <Container fluid>
            <SideMenu
              handleSelection={handleSelection}
              visualizeAlgorithm={visualizeAlgorithm}
              clearGrid={clearGrid}
              handleWallGeneration={handleWallGeneration}
            />
          </Container>
        </Grid.Column>
        <Grid.Column width={12}>
          <PathFindingGrid
            algoString={algoString}
            grid={grid}
            setGrid={setGrid}
            getNewGridWithWallToggled={getNewGridWithWallToggled}
          />
        </Grid.Column>
      </Grid>
    </div>
  );
}

const getInitialGrid = () => {
  const grid = [];
  for (let row = 0; row <= 20; row++) {
    const currentRow = [];
    for (let col = 0; col <= 50; col++) {
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
    gScore: Infinity,
    fScore: Infinity,
    isVisited: false,
    isWall: false,
    visitedClass: false,
    previousNode: null
  };
};

const algoReducer = (state, action) => {
  switch (action.type) {
    case "Breadth First Search":
      return bfs;
    case "A-star Search":
      return aStarSearch;
    case "A-star Search Min Heap":
      return aStarSearchMinHeap
    case "Depth First Search":
      return dfs;
    default:
      return bfs;
  }
};

const getNewGridWithVisitedClass = (grid, row, col) => {
  const newGrid = grid;
  const node = newGrid[row][col];
  if (node.isStart || node.isFinish) return grid;
  const newNode = {
    ...node,
    visitedClass: true
  };
  newGrid[row][col] = newNode;
  return newGrid;
};

const getNewGridWithWallToggled = (grid, row, col) => {
  const newGrid = grid;
  const node = newGrid[row][col];
  if (node.isStart || node.isFinish) return grid;
  const newNode = {
    ...node,
    isWall: !node.isWall
  };
  newGrid[row][col] = newNode;
  return newGrid;
};
