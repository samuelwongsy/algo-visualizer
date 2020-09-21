// a-star search using manhatten distance heuristics

let FINISH_NODE_ROW;
let FINISH_NODE_COL;

function aStarSearch(grid, startNode, finishNode) {
    if (!startNode || !finishNode || startNode === finishNode) {
        return false;
    }

    FINISH_NODE_ROW = finishNode.row;
    FINISH_NODE_COL = finishNode.col;

    const visitedNodesInOrder = [];
    const unvisitedNodes = []; // queue
    unvisitedNodes.push(startNode);

    while (!!unvisitedNodes.length) {
        const currentNode = unvisitedNodes.shift();

        if (currentNode === startNode) {
            currentNode.gScore = 0;
            currentNode.fScore = getHeuristics(currentNode);
        }

        if (currentNode.isWall) continue;

        // if (currentNode.isVisited) continue;

        currentNode.isVisited = true;
        visitedNodesInOrder.push(currentNode);

        if (currentNode === finishNode) break;

        updateUnvisitedNeighbours(currentNode, unvisitedNodes, grid);
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

function updateUnvisitedNeighbours(node, queue, grid) {
    const unvisitedNeighbours = getUnvisitedNeighbours(node, grid);

    for (const neighbour of unvisitedNeighbours) {
        const tentativeGScore = node.gScore + 1;
        if (tentativeGScore < neighbour.gScore) {
            neighbour.previousNode = node;
            neighbour.gScore = tentativeGScore;
            neighbour.fScore = neighbour.gScore + getHeuristics(neighbour);
            if (!queue.includes(neighbour)) queue.push(neighbour);
        }
    }
    queue.sort((a, b) => a.fScore - b.fScore);
}

function getUnvisitedNeighbours(node, grid) {
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