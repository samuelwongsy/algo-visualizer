function randomizedPrimsAlgorithmMaze(grid, startNode, finishNode) {
  if (!startNode || !finishNode || startNode === finishNode) {
    return [[], []];
  }
  
  const wallNodesInOrder = [];
  for (let row = 0; row < grid.length; row++) {
      for (let col = 0; col < grid[0].length; col++) {
          const node = grid[row][col];
          if (node.isStart || node.isFinish) continue;
          wallNodesInOrder.push(node);
      }
  }

  const nodesInOrder = [];
  const path = [];
  const pathSet = new Set();
  path.push(startNode);
  pathSet.add(`${startNode.row}-${startNode.col}`);

  while (!!pathSet.size) {
    const randIdx = Math.floor(Math.random()*path.length);
    const currentNode = path[randIdx];
    path.splice(randIdx, 1);
    pathSet.delete(`${currentNode.row}-${currentNode.col}`);
    if (currentNode.isConnected) continue;
    currentNode.isConnected = true;
    nodesInOrder.push(currentNode);

    const neighbours = getConnectedNeighbours(grid, currentNode);
    if (!!neighbours.length) {
      const connectedNode = neighbours[Math.floor(Math.random()*neighbours.length)];
      nodesInOrder.push(connect(connectedNode, currentNode, grid));
    }

    getUnconnectedNeighbours(grid, currentNode, path, pathSet);
  }
  return [wallNodesInOrder, nodesInOrder];
}

function getConnectedNeighbours(grid, node) {
  const connectedNeighbours = [];
  const row = node.row, col = node.col;
  if (row > 2 && grid[row-2][col].isConnected) connectedNeighbours.push(grid[row-2][col]);
  if (col > 2 && grid[row][col-2].isConnected) connectedNeighbours.push(grid[row][col-2]);
  if (row < grid.length-3 && grid[row+2][col].isConnected) connectedNeighbours.push(grid[row+2][col]);
  if (col < grid[0].length-3 && grid[row][col+2].isConnected) connectedNeighbours.push(grid[row][col+2]);

  return connectedNeighbours;
}

function getUnconnectedNeighbours(grid, node, path, pathSet) {
  const unconnectedNeighbours = [];
  const row = node.row, col = node.col;
  if (row > 2 && !grid[row-2][col].isConnected) unconnectedNeighbours.push(grid[row-2][col]);
  if (col > 2 && !grid[row][col-2].isConnected) unconnectedNeighbours.push(grid[row][col-2]);
  if (row < grid.length-3 && !grid[row+2][col].isConnected) unconnectedNeighbours.push(grid[row+2][col]);
  if (col < grid[0].length-3 && !grid[row][col+2].isConnected) unconnectedNeighbours.push(grid[row][col+2]);

  for (let i = 0; i < unconnectedNeighbours.length; i++){
    const neighbour = unconnectedNeighbours[i];
    path.push(neighbour);
    pathSet.add(`${neighbour.row}-${neighbour.col}`);
  }
}

function connect(node1, node2, grid) {
  return grid[Math.floor(((node1.row+node2.row)/2))][Math.floor(((node1.col+node2.col)/2))]
}

export default randomizedPrimsAlgorithmMaze;