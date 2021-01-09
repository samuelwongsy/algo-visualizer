

function recursiveDivision(grid, startNode, finishNode) {
    if (!startNode || !finishNode || startNode === finishNode) {
        return false;
    }
    const newGrid = grid;
    const wallNodesInOrder = [];
    const wallNodesSet = new Set();
    
    const startRow = 0;
    const startCol = 0;
    const endRow = grid.length-1;
    const endCol = grid[0].length-1;
    // inital boundary
    for (let col = 0; col < grid[0].length; col++) {
        const currentNode = grid[0][col];
        wallNodesInOrder.push(currentNode);
        wallNodesSet.add(`${currentNode.row}-${currentNode.col}`);
    }

    for (let row = 1; row < grid.length-1; row++) {
        const currentNode = grid[row][endCol];
        wallNodesInOrder.push(currentNode);
        wallNodesSet.add(`${currentNode.row}-${currentNode.col}`);
    }

    for (let col = endCol; col >= 0; col--) {
        const currentNode = grid[endRow][col];
        wallNodesInOrder.push(currentNode);
        wallNodesSet.add(`${currentNode.row}-${currentNode.col}`);
    }

    for (let row = endRow - 1; row > 0; row--) {
        const currentNode = grid[row][startCol];
        wallNodesInOrder.push(currentNode);
        wallNodesSet.add(`${currentNode.row}-${currentNode.col}`);
    }

    divisionHelper(newGrid, startRow+1, endRow-1, startCol+1, endCol-1, wallNodesInOrder, wallNodesSet);

    return [newGrid, wallNodesInOrder]
}

function divisionHelper(grid, startRow, endRow, startCol, endCol, wallNodesInOrder, wallNodesSet) {
    // if (startRow >= endRow - 2) return;
    // if (startCol >= endCol - 2) return;

    const height = endRow - startRow;
    const width = endCol - startCol;

    if (height <= 1 && width <= 1) return;
    
    let typeOfDivide;
    if (width >= height) {
        typeOfDivide = 'vertical';
    } else {
        typeOfDivide = 'horizontal';
    }

    if (height === 3 && typeOfDivide === 'vertical') {
        typeOfDivide = 'horizontal';
    } else if (width === 3 && typeOfDivide === 'horizontal') {
        typeOfDivide = 'vertical';
    }

    if (typeOfDivide === 'vertical') {
        let col = getRandomInt(startCol+1, endCol-1);
        let tries = 10;
        while (!(wallNodesSet.has(`${startRow-1}-${col}`) && wallNodesSet.has(`${endRow+1}-${col}`))) {
            if (tries === 0) return;
            col = getRandomInt(startCol+1, endCol-1);
            tries--;
        }
        // const col = Math.floor((startCol + endCol) / 2);
        const openRow = getRandomInt(startRow, endRow);
        for (let row = startRow; row <= endRow; row++) {
            if (row === openRow) continue;
            const currentNode = grid[row][col];
            if (currentNode.isStart || currentNode.isFinish) continue;
            wallNodesInOrder.push(currentNode);
            wallNodesSet.add(`${currentNode.row}-${currentNode.col}`);
        }
        divisionHelper(grid, startRow, endRow, startCol, col-1, wallNodesInOrder, wallNodesSet);
        divisionHelper(grid, startRow, endRow, col+1, endCol, wallNodesInOrder, wallNodesSet);
    } else if (typeOfDivide === 'horizontal') {
        let row = getRandomInt(startRow+1, endRow-1);
        let tries = 10;
        while (!(wallNodesSet.has(`${row}-${startCol-1}`) && wallNodesSet.has(`${row}-${endCol+1}`))) {
            if (tries === 0) return;
            row = getRandomInt(startRow+1, endRow-1);
            tries--;
        }
        // const row = Math.floor((startRow + endRow) / 2);
        const openCol = getRandomInt(startCol, endCol);
        for (let col = startCol; col <= endCol; col++) {
            if (col === openCol) continue;
            const currentNode = grid[row][col];
            if (currentNode.isStart || currentNode.isFinish) continue;
            wallNodesInOrder.push(currentNode);
            wallNodesSet.add(`${currentNode.row}-${currentNode.col}`);
        }
        divisionHelper(grid, startRow, row-1, startCol, endCol, wallNodesInOrder, wallNodesSet);
        divisionHelper(grid, row+1, endRow, startCol, endCol, wallNodesInOrder, wallNodesSet);
    }
}

function getRandomInt(min, max) {
    let result = Math.floor(Math.random() * Math.floor(max - min)) + min;
    if (max-1 === min) {
        const flag = Math.random();
        if (flag <= 0.5) return min;
        if (flag > 0.5) return max;
    }
    return result;
}

export default recursiveDivision;