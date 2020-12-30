

function recursiveDivision(grid, startNode, finishNode) {
    if (!startNode || !finishNode || startNode === finishNode) {
        return false;
    }
    const newGrid = grid;
    const wallNodesInOrder = [];
    
    const startRow = 0;
    const startCol = 0;
    const endRow = grid.length-1;
    const endCol = grid[0].length-1;
    // inital boundary
    for (let col = 0; col < grid[0].length; col++) {
        const currentNode = grid[0][col];
        wallNodesInOrder.push(currentNode);
    }

    for (let row = 1; row < grid.length-1; row++) {
        const currentNode = grid[row][endCol];
        wallNodesInOrder.push(currentNode);
    }

    for (let col = endCol; col >= 0; col--) {
        const currentNode = grid[endRow][col];
        wallNodesInOrder.push(currentNode);
    }

    for (let row = endRow - 1; row > 0; row--) {
        const currentNode = grid[row][startCol];
        wallNodesInOrder.push(currentNode);
    }

    divisionHelper(newGrid, startRow+1, endRow-1, startCol+1, endCol-1, wallNodesInOrder);

    return [newGrid, wallNodesInOrder]
}

function divisionHelper(grid, startRow, endRow, startCol, endCol, wallNodesInOrder) {
    if (startRow >= endRow - 2) return;
    if (startCol >= endCol - 2) return;

    const height = endRow - startRow;
    const width = endCol - startCol;

    let typeOfDivide;

    if (width >= height) {
        typeOfDivide = 'vertical';
    } else {
        typeOfDivide = 'horizontal';
    }

    if (typeOfDivide === 'vertical') {
        const col = getRandomInt(startCol+1, endCol-1);
        const openRow = getRandomInt(startRow, endRow);
        for (let row = startRow; row <= endRow; row++) {
            if (row === openRow) continue;
            const currentNode = grid[row][col];
            wallNodesInOrder.push(currentNode);
        }
        divisionHelper(grid, startRow, endRow, startCol, col-1, wallNodesInOrder);
        divisionHelper(grid, startRow, endRow, col+1, endCol, wallNodesInOrder);
    } else if (typeOfDivide === 'horizontal') {
        const row = getRandomInt(startRow+1, endRow-1);
        const openCol = getRandomInt(startCol, endCol);
        for (let col = startCol; col <= endCol; col++) {
            if (col === openCol) continue;
            const currentNode = grid[row][col];
            wallNodesInOrder.push(currentNode);
        }
        divisionHelper(grid, startRow, row-1, startCol, endCol, wallNodesInOrder);
        divisionHelper(grid, row+1, endRow, startCol, endCol, wallNodesInOrder);
    }
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * Math.floor(max - min)) + min;
}

export default recursiveDivision;