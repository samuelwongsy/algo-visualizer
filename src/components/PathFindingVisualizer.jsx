import React, { useState, useReducer, useEffect } from "react";
import PathFindingGrid from "./PathFindingGrid";
import SideMenu from "./SideMenu";
import { Container, Grid } from "semantic-ui-react";
import bfs from "../algorithms/breath-first-search";
import aStarSearch from "../algorithms/a-star-search-queue";

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

  const handleSelection = newAlgoString => {
    setAlgoString(newAlgoString);
    console.log(newAlgoString);
  };

  return (
    <div>
      <Grid verticalAlign="middle" stackable>
        <Grid.Column width={2}>
          <Container fluid>
            <SideMenu
              handleSelection={handleSelection}
              visualizeAlgorithm={visualizeAlgorithm}
              clearGrid={clearGrid}
            />
          </Container>
        </Grid.Column>
        <Grid.Column width={12}>
          <PathFindingGrid
            algoString={algoString}
            grid={grid}
            setGrid={setGrid}
          />
        </Grid.Column>
      </Grid>
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
    gScore: Infinity,
    fScore: Infinity,
    isVisited: false,
    isWall: false,
    previousNode: null
  };
};

const algoReducer = (state, action) => {
  switch (action.type) {
    case "Breadth First Search":
      return bfs;
    case "A-star Search":
      return aStarSearch;
    default:
      return bfs;
  }
};
