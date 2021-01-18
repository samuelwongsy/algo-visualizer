import React, { useState, useReducer, useEffect } from "react";
import "./PathFindingVisualizer.css";
import PathFindingGrid from "./PathFindingGrid/PathFindingGrid";
import SideMenu from "./SideMenu";
import SmallScreenContainerText from "./SmallScreenContainerText";
import { Container, Grid } from "semantic-ui-react";
import bfs from "../../algorithms/path-finding-algorithms/breath-first-search";
import aStarSearch from "../../algorithms/path-finding-algorithms/a-star-search-queue";
import aStarSearchMinHeap from "../../algorithms/path-finding-algorithms/a-star-search";
import dfs from "../../algorithms/path-finding-algorithms/depth-first-search";
import recursiveDivision from "../../algorithms/maze-generation-algorithms/recursive-division";
import binaryTreeMaze from "../../algorithms/maze-generation-algorithms/binary-tree-maze";
import depthFirstSearchMaze from "../../algorithms/maze-generation-algorithms/depth-first-search-maze";

const START_NODE_ROW = 11;
const START_NODE_COL = 5;
const FINISH_NODE_ROW = 11;
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
    } else if (wallString === 'Binary Tree Maze') {
      wallAlgo = binaryTreeMaze;
      startWithWalls = true;
    } else if (wallString === 'Depth First Search Maze') {
      wallAlgo = depthFirstSearchMaze;
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
      animateFullWalls();
      setTimeout(() => {animateNodeAlgo(nodesInOrder)}, 20 * Math.ceil(wallNodesInOrder.length / 2));
    }
  }

  const animateNodeAlgo = (nodesInOrder) => {
    for (let i = 0; i < nodesInOrder.length; i++) {
      setTimeout(() => {
        const node = nodesInOrder[i];
        const newGrid = getNewGridWithWallToggled(grid, node.row, node.col);
        setGrid(newGrid);
        if (!(node.isStart || node.isFinish)) {
          // document.getElementById(`node-${node.row}-${node.col}`).className = "node node-intermediate";
          document.getElementById(`node-${node.row}-${node.col}`).className = "node";
        };
      }, 50 * i);
    }
  }

  const animateFullWalls = () => {
    let i = 0, j = 0, isIncreasing = true, count = 0;
    const lastRow = grid.length, lastCol = grid[0].length;
    const nodesInOrder = [];
    while (i < lastRow) {
      while (0 <= j && j < lastCol) {
        const node = grid[i][j];
        nodesInOrder.push(node);
        if (isIncreasing) {
          j++;
        } else {
          j--;
        }
      }
      if (isIncreasing) {
        j--;
      } else {
        j++;
      }
      isIncreasing = !isIncreasing;
      i++;
    }
    
    for (let i = 0; i <= nodesInOrder.length - i - 1; i++) {
      if (i === nodesInOrder.length - i - 1) {
        setTimeout(() => {
          const node = nodesInOrder[i];
          const newGrid = getNewGridWithWallToggled(grid, node.row, node.col);
          setGrid(newGrid);
          if (!(node.isStart || node.isFinish)) {
            document.getElementById(`node-${node.row}-${node.col}`).className = "node node-wall";
          };
        }, 20 * i);
      } else {
        setTimeout(() => {
          const node1 = nodesInOrder[i];
          const node2 = nodesInOrder[nodesInOrder.length - i - 1];
          const newGrid1 = getNewGridWithWallToggled(grid, node1.row, node1.col);
          setGrid(newGrid1);
          const newGrid2 = getNewGridWithWallToggled(grid, node2.row, node2.col);
          setGrid(newGrid2);
  
          if (!(node1.isStart || node1.isFinish)) {
            document.getElementById(`node-${node1.row}-${node1.col}`).className = "node node-wall";
          };
          if (!(node2.isStart || node2.isFinish)) {
            document.getElementById(`node-${node2.row}-${node2.col}`).className = "node node-wall";
          }
        }, 20 * i);
      }
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
      <Grid verticalAlign="middle" >
        <Grid.Column width={3} floated="left">
          <Container fluid className='sideMenuWrapper'>
            <SideMenu
              handleSelection={handleSelection}
              visualizeAlgorithm={visualizeAlgorithm}
              clearGrid={clearGrid}
              handleWallGeneration={handleWallGeneration}
            />
          </Container>
        </Grid.Column>
        <Grid.Column width={13}>
          <PathFindingGrid
            algoString={algoString}
            grid={grid}
            setGrid={setGrid}
            getNewGridWithWallToggled={getNewGridWithWallToggled}
          />
        </Grid.Column>
        {/* <Grid.Column className="segment centered" only="mobile tablet">
          <SmallScreenContainerText />
        </Grid.Column> */}
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
    previousNode: null,
    isExplored: false,
    previousExploredNode: false
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
