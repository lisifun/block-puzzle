// Function to draw the blocks in the board
function boardBlock(color, boardElement) {
  // To create a new div element in the document
  const newBlock = document.createElement("div");

  // To add className and style to the new div element
  newBlock.className = "board-block";
  newBlock.style.width = "40px";
  newBlock.style.height = "40px";
  newBlock.style.borderRadius = "5px";
  newBlock.style.backgroundColor = color;

  // To append the new div element to the board element
  boardElement.appendChild(newBlock);
}

// Functio to draw the board with all the blocks
function drawBoard(boardStatus, boardElement) {
  // To change the board element
  boardElement.innerHTML = "";

  // To iterate over the matrix boardStatus and draw the board with that variable calling the boardBlock function
  for (let i = 0; i < boardStatus.length; i++) {
    for (let j = 0; j < boardStatus[i].length; j++) {
      boardBlock(boardStatus[i][j].color, boardElement);
    }
  }
  return boardStatus;
}

// Function to check if there are any completed lines (hprizontal and vertical) in the board and to clean them
function checkAndCleanCompletedLines(boardStatus, boardElement) {
  // Two variables to save the index when a row or a column is completed
  let completedRows = [];
  let completedColumns = [];

  // To check if there are any row (horizontal line) is completed
  for (let i = 0; i < boardStatus.length; i++) {
    let row = boardStatus[i];
    let test = row.filter((block) => block.color === baseColorBoard);
    if (test.length === 0) {
      completedRows.push(i);
    }
  }

  // To check if there are any column (vertical line) is completed
  for (let j = 0; j < boardStatus[0].length; j++) {
    let column = [];
    for (let i = 0; i < boardStatus.length; i++) {
      column.push(boardStatus[i][j]);
    }
    let test = column.filter((block) => block.color === baseColorBoard);
    if (test.length === 0) {
      completedColumns.push(j);
    }
  }

  // To clean the completed rows
  completedRows.forEach((row) => {
    let col = 0;
    // A function to remove blocks one by one
    const removeBlock = () => {
      if (col < boardStatus[row].length) {
        boardStatus[row][col] = { color: baseColorBoard };
        drawBoard(boardStatus, boardElement); // To redraw the board after each block removal
        col++;
        // To call the next block removal after a delay
        setTimeout(removeBlock, 100);
      }
    };

    // Start the block removal process for the current row
    removeBlock();
  });

  // To clean the completed columns
  completedColumns.forEach((column) => {
    let row = 0;
    // A function to remove blocks one by one
    const removeBlock = () => {
      if (row < boardStatus.length) {
        boardStatus[row][column] = { color: baseColorBoard };
        drawBoard(boardStatus, boardElement); // To redraw the board after each block removal
        row++;
        // To call the next block removal after a delay
        setTimeout(removeBlock, 100);
      }
    };

    // Start the block removal process for the current column
    removeBlock();
  });

  // Calling the method updateScoreCompletedLines to update the score when there are completed lines in the board
  newGame.updateScoreCompletedLines(completedRows, completedColumns);

  return boardStatus;
}
