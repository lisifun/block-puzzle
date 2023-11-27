function boardBlock(color, boardElement) {
  const newBlock = document.createElement("div");

  newBlock.className = "board-block";
  newBlock.style.width = "40px";
  newBlock.style.height = "40px";
  newBlock.style.borderRadius = "5px";
  newBlock.style.backgroundColor = color;

  boardElement.appendChild(newBlock);
}

function drawBoard(boardStatus, boardElement) {
  boardElement.innerHTML = "";

  for (let i = 0; i < boardStatus.length; i++) {
    for (let j = 0; j < boardStatus[i].length; j++) {
      boardBlock(boardStatus[i][j].color, boardElement);
    }
  }
  return boardStatus;
}

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

  // Delayed cleaning process
  setTimeout(() => {
    // To clean the completed rows
    completedRows.forEach((row) => {
      let col = 0;

      // Define a function to remove blocks one by one
      const removeBlock = () => {
        if (col < boardStatus[row].length) {
          boardStatus[row][col] = { color: baseColorBoard };
          drawBoard(boardStatus, boardElement); // Redraw the board after each block removal
          col++;

          // Call the next block removal after a delay
          setTimeout(removeBlock, 100); // Adjust the delay time as needed
        }
      };

      // Start the block removal process for the current row
      removeBlock();
    });

    // To clean the completed columns
    completedColumns.forEach((column) => {
      let row = 0;

      // Define a function to remove blocks one by one
      const removeBlock = () => {
        if (row < boardStatus.length) {
          boardStatus[row][column] = { color: baseColorBoard };
          drawBoard(boardStatus, boardElement); // Redraw the board after each block removal
          row++;

          // Call the next block removal after a delay
          setTimeout(removeBlock, 100); // Adjust the delay time as needed
        }
      };

      // Start the block removal process for the current column
      removeBlock();
    });
  }, 100); // 1000 milliseconds (1 second) delay

  newGame.updateScoreCompletedLines(completedRows, completedColumns);

  return boardStatus;
}
