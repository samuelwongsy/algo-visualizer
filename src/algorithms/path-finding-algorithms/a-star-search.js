import MinHeap from '../data-structures/MinHeap';
// a-star search using manhatten distance heuristics
// not using visited because a-star search allows you to reach a visited node with
// a lower distance

let FINISH_NODE_ROW;
let FINISH_NODE_COL;

function aStarSearch(grid, startNode, finishNode) {
  if (!startNode || !finishNode || startNode === finishNode) {
    return [[], []];
  }

  FINISH_NODE_ROW = finishNode.row;
  FINISH_NODE_COL = finishNode.col;

  const visitedNodesInOrder = [];
  const openNodes = new MinHeap([]);
  openNodes.insert(startNode);
  while (!!openNodes.heap.length) {
    // console.log(openNodes.heap);
    const currentNode = openNodes.remove();

    if (currentNode === startNode) {
      currentNode.gScore = 0;
      currentNode.distance = getHeuristics(currentNode);
    }

    if (currentNode.isWall) continue;

    visitedNodesInOrder.push(currentNode);

    if (currentNode === finishNode) {
      finishNode.isVisited = true;
      break;
    }

    updateNeighbours(currentNode, openNodes, grid);
  }

  const nodesInShortestPathOrder = getNodesInShortestPathOrder(finishNode);
  // console.log(visitedNodesInOrder);

  return [visitedNodesInOrder, nodesInShortestPathOrder];
}

function getHeuristics(node) {
  const distance = Math.abs(node.row - FINISH_NODE_ROW) +
    Math.abs(node.col - FINISH_NODE_COL);

  return distance
}

function updateNeighbours(node, minHeap, grid) {
  const neighbours = getNeighbours(node, grid);

  for (const neighbour of neighbours) {
    const tentativeGScore = node.gScore + 1;
    if (tentativeGScore < neighbour.gScore) {
      neighbour.previousNode = node;
      neighbour.gScore = tentativeGScore;
      neighbour.distance = neighbour.gScore + getHeuristics(neighbour);
      if (!minHeap.heap.includes(neighbour)) minHeap.insert(neighbour);
    }
  }
}

function getNeighbours(node, grid) {
  const {
    col,
    row
  } = node;

  const neighbours = [];

  if (row > 0) neighbours.push(grid[row - 1][col]);
  if (col > 0) neighbours.push(grid[row][col - 1]);
  if (row < grid.length - 1) neighbours.push(grid[row + 1][col]);
  if (col < grid[0].length - 1) neighbours.push(grid[row][col + 1]);

  return neighbours;
}

function getNodesInShortestPathOrder(finishNode) {
  // If we didn't visit finishNode or doesn't have a valid path, return empty list.
  if (!finishNode.isVisited && !finishNode.previousNode) return [];

  const nodesInShortestPathOrder = [];
  let currentNode = finishNode;
  while (currentNode !== null) {
    nodesInShortestPathOrder.unshift(currentNode);
    currentNode = currentNode.previousNode;
  }
  return nodesInShortestPathOrder;
}

export default aStarSearch;