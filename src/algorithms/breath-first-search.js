// Breath-first search using a queue

function bfs(grid, startNode, finishNode) {
  if (!startNode || !finishNode || startNode === finishNode) {
    return false;
  }

  const visitedNodesInOrder = [];
  const unvisitedNodes = []; // queue
  unvisitedNodes.push(startNode);

  while (!!unvisitedNodes.length) {
    const currentNode = unvisitedNodes.shift();
    console.log(currentNode);

    if (currentNode.isWall) continue;

    if (currentNode.isVisited) continue;

    currentNode.isVisited = true;
    visitedNodesInOrder.push(currentNode);

    if (currentNode === finishNode) return visitedNodesInOrder;

    updateUnvisitedNeighbours(currentNode, unvisitedNodes, grid);
  }

  return visitedNodesInOrder;
}

function updateUnvisitedNeighbours(node, queue, grid) {
  const unvisitedNeighbours = getUnvisitedNeighbours(node, grid);

  for (const neighbour of unvisitedNeighbours) {
    neighbour.previousNode = node;
    queue.push(neighbour);
  }
}

function getUnvisitedNeighbours(node, grid) {
  const { col, row } = node;

  const neighbours = [];

  if (row > 0) neighbours.push(grid[row - 1][col]);
  if (col > 0) neighbours.push(grid[row][col - 1]);
  if (row < grid.length - 1) neighbours.push(grid[row + 1][col]);
  if (col < grid[0].length - 1) neighbours.push(grid[row][col + 1]);

  return neighbours.filter(node => !node.isVisited);
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

export default bfs;
export { getNodesInShortestPathOrder };
