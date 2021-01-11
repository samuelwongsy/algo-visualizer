function depthFirstSearchMaze(grid, startNode, finishNode) {
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
    const stack = [];
    const startRow = 1, startCol = 1, endRow = grid.length-2, endCol = grid[0].length-2;
    stack.push(startNode);

    while (!!stack.length) {
        const currentNode = stack.pop();

        if (currentNode.isExplored) continue;

        currentNode.isExplored = true;
        nodesInOrder.push(currentNode);
        if (!!currentNode.previousExploredNode) {
            nodesInOrder.push(connect(currentNode, currentNode.previousExploredNode, grid));
        }
        getUnvisitedNeighboursInRandomOrder(currentNode, stack, grid);
    }

    return [wallNodesInOrder, nodesInOrder];
}

function getUnvisitedNeighboursInRandomOrder(node, stack, grid) {
    const unvisitedNeighbours = [];
    const row = node.row, col = node.col;

    if (row > 2 && !grid[row-2][col].isExplored) unvisitedNeighbours.push(grid[row-2][col]);
    if (col > 2 && !grid[row][col-2].isExplored) unvisitedNeighbours.push(grid[row][col-2]);
    if (row < grid.length-3 && !grid[row+2][col].isExplored) unvisitedNeighbours.push(grid[row+2][col]);
    if (col < grid[0].length-3 && !grid[row][col+2].isExplored) unvisitedNeighbours.push(grid[row][col+2]);

    while (!!unvisitedNeighbours.length) {
        const randomIndex = Math.floor(Math.random() * unvisitedNeighbours.length);
        const randomNode = unvisitedNeighbours[randomIndex];
        randomNode.previousExploredNode = node;
        stack.push(randomNode);
        unvisitedNeighbours.splice(randomIndex, 1);
    }
}

function connect(currentNode, neighbourNode, grid) {
    let row = Math.floor((currentNode.row + neighbourNode.row) / 2);
    let col = Math.floor((currentNode.col + neighbourNode.col) / 2);
    return grid[row][col];
}

export default depthFirstSearchMaze;