function binaryTreeMaze(grid, startNode, finishNode) {
    if (!startNode || !finishNode || startNode === finishNode) {
        return [[], []];
    }
    // const newGrid = grid;
    const wallNodesInOrder = [];

    for (let row = 0; row < grid.length; row++) {
        for (let col = 0; col < grid[0].length; col++) {
            const node = grid[row][col];
            if (node.isStart || node.isFinish) continue;
            wallNodesInOrder.push(node);
        }
    }
    const nodesInOrder = [];

    const startRow = 1;
    const startCol = 1;
    const endRow = grid.length-2;
    const endCol = grid[0].length-2;

    for (let row = 1; row <= endRow; row = row + 2) {
        for (let col = 1; col <= endCol; col = col + 2) {
            const currentNode = grid[row][col];
            nodesInOrder.push(currentNode);
            
            const neighbours = [];
            if (row > 1) neighbours.push(grid[row-2][col]);
            if (col > 1) neighbours.push(grid[row][col-2]);

            if (neighbours.length == 0) continue;

            let randomIndex;
            if (Math.random() < 0.5) {
                randomIndex = 0 % neighbours.length;
            } else {
                randomIndex = 1 % neighbours.length;
            }

            nodesInOrder.push(connect(currentNode, neighbours[randomIndex], grid));
        }
    }

    return [wallNodesInOrder, nodesInOrder];
}

function connect(currentNode, neighbourNode, grid) {
    let row = Math.floor((currentNode.row + neighbourNode.row) / 2);
    let col = Math.floor((currentNode.col + neighbourNode.col) / 2);
    return grid[row][col];
}

export default binaryTreeMaze;