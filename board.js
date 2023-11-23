class Board {
  constructor() {
    this.boardElement = document.getElementById("board");
    this.boardStatus = boardStatus;
  }

  boardBlock(color) {
    const newBlock = document.createElement("div");

    newBlock.className = "board-block";
    newBlock.style.width = "40px";
    newBlock.style.height = "40px";
    newBlock.style.borderRadius = "5px";
    newBlock.style.backgroundColor = color;

    this.boardElement.appendChild(newBlock);
  }

  drawBoard() {
    this.boardElement.innerHTML = "";

    for (let i = 0; i < this.boardStatus.length; i++) {
      for (let j = 0; j < this.boardStatus[i].length; j++) {
        this.boardBlock(this.boardStatus[i][j].color);
      }
    }
  }

  isFitPiece(piece, index) {
    const rowSelected = Math.floor(index / 10);
    const columnSelected = index % 10;

    if (
      rowSelected + piece.length > 10 ||
      columnSelected + piece[0].length > 10
    ) {
      return false;
    } else {
      for (let i = 0; i < piece.length; i++) {
        for (let j = 0; j < piece[i].length; j++) {
          if (piece[i][j].color === "none") {
            continue;
          } else {
            if (
              this.boardStatus[rowSelected + i][columnSelected + j].color ===
              baseColorBoard
            ) {
              continue;
            } else {
              return false;
            }
          }
        }
      }
    }

    return true;
  }

  updateBoardWithPiece(piece, index) {
    console.log("inside updateBoardWithPiece method");
    console.log(piece, index);
    const rowSelected = Math.floor(index / 10);
    const columnSelected = index % 10;

    for (let i = 0; i < piece.length; i++) {
      for (let j = 0; j < piece[i].length; j++) {
        if (piece[i][j].color === "none") {
          continue;
        } else {
          this.boardStatus[rowSelected + i][columnSelected + j].color =
            piece[i][j].color;
        }
      }
    }
    return this.boardStatus;
  }

  checkAndCleanCompletedLines() {
    // Two variables to save the index when a row or a column is completed
    let completedRows = [];
    let completedColumns = [];

    // To check if there are any row (horizontal line) is completed
    for (let i = 0; i < this.boardStatus.length; i++) {
      let row = this.boardStatus[i];
      let test = row.filter((block) => block.color === baseColorBoard);
      if (test.length === 0) {
        completedRows.push(i);
      }
    }

    // To check if there are any column (vertical line) is completed
    for (let j = 0; j < this.boardStatus[0].length; j++) {
      let column = [];
      for (let i = 0; i < this.boardStatus.length; i++) {
        column.push(this.boardStatus[i][j]);
      }
      let test = column.filter((block) => block.color === baseColorBoard);
      if (test.length === 0) {
        completedColumns.push(j);
      }
    }

    // Delayed cleaning process after 1000 milliseconds (1 second)
    setTimeout(() => {
      // To clean the completed rows
      completedRows.forEach((row) => {
        let col = 0;

        // Define a function to remove blocks one by one
        const removeBlock = () => {
          if (col < this.boardStatus[row].length) {
            this.boardStatus[row][col] = { color: baseColorBoard };
            this.drawBoard(); // Redraw the board after each block removal
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
          if (row < this.boardStatus.length) {
            this.boardStatus[row][column] = { color: baseColorBoard };
            this.drawBoard(); // Redraw the board after each block removal
            row++;

            // Call the next block removal after a delay
            setTimeout(removeBlock, 100); // Adjust the delay time as needed
          }
        };

        // Start the block removal process for the current column
        removeBlock();
      });
    }, 1000); // 1000 milliseconds (1 second) delay

    return this.boardStatus;
  }

  isGameOver(piece) {
    for (let i = 0; i < this.boardStatus.length; i++) {
      for (let j = 0; j < this.boardStatus[i].length; j++) {
        if (this.boardStatus[i][j].color === baseColorBoard) {
          let index = i * 10 + j;

          if (this.isFitPiece(piece, index)) {
            return true;
          }
        } else {
          continue;
        }
      }
    }
    return false;
  }
}

// Base color for the board in light mode
const baseColorBoard = "#E8E8E8"; // For dark mode => '#232C3B

// Board Matrix Status
const boardStatus = [
  [
    { color: baseColorBoard },
    { color: baseColorBoard },
    { color: baseColorBoard },
    { color: baseColorBoard },
    { color: baseColorBoard },
    { color: baseColorBoard },
    { color: baseColorBoard },
    { color: baseColorBoard },
    { color: baseColorBoard },
    { color: baseColorBoard },
  ],
  [
    { color: baseColorBoard },
    { color: baseColorBoard },
    { color: baseColorBoard },
    { color: baseColorBoard },
    { color: baseColorBoard },
    { color: baseColorBoard },
    { color: baseColorBoard },
    { color: baseColorBoard },
    { color: baseColorBoard },
    { color: baseColorBoard },
  ],
  [
    { color: baseColorBoard },
    { color: baseColorBoard },
    { color: baseColorBoard },
    { color: baseColorBoard },
    { color: baseColorBoard },
    { color: baseColorBoard },
    { color: baseColorBoard },
    { color: baseColorBoard },
    { color: baseColorBoard },
    { color: baseColorBoard },
  ],
  [
    { color: baseColorBoard },
    { color: baseColorBoard },
    { color: baseColorBoard },
    { color: baseColorBoard },
    { color: baseColorBoard },
    { color: baseColorBoard },
    { color: baseColorBoard },
    { color: baseColorBoard },
    { color: baseColorBoard },
    { color: baseColorBoard },
  ],
  [
    { color: baseColorBoard },
    { color: baseColorBoard },
    { color: baseColorBoard },
    { color: baseColorBoard },
    { color: baseColorBoard },
    { color: baseColorBoard },
    { color: baseColorBoard },
    { color: baseColorBoard },
    { color: baseColorBoard },
    { color: baseColorBoard },
  ],
  [
    { color: baseColorBoard },
    { color: baseColorBoard },
    { color: baseColorBoard },
    { color: baseColorBoard },
    { color: baseColorBoard },
    { color: baseColorBoard },
    { color: baseColorBoard },
    { color: baseColorBoard },
    { color: baseColorBoard },
    { color: baseColorBoard },
  ],
  [
    { color: baseColorBoard },
    { color: baseColorBoard },
    { color: baseColorBoard },
    { color: baseColorBoard },
    { color: baseColorBoard },
    { color: baseColorBoard },
    { color: baseColorBoard },
    { color: baseColorBoard },
    { color: baseColorBoard },
    { color: baseColorBoard },
  ],
  [
    { color: baseColorBoard },
    { color: baseColorBoard },
    { color: baseColorBoard },
    { color: baseColorBoard },
    { color: baseColorBoard },
    { color: baseColorBoard },
    { color: baseColorBoard },
    { color: baseColorBoard },
    { color: baseColorBoard },
    { color: baseColorBoard },
  ],
  [
    { color: baseColorBoard },
    { color: baseColorBoard },
    { color: baseColorBoard },
    { color: baseColorBoard },
    { color: baseColorBoard },
    { color: baseColorBoard },
    { color: baseColorBoard },
    { color: baseColorBoard },
    { color: baseColorBoard },
    { color: baseColorBoard },
  ],
  [
    { color: baseColorBoard },
    { color: baseColorBoard },
    { color: baseColorBoard },
    { color: baseColorBoard },
    { color: baseColorBoard },
    { color: baseColorBoard },
    { color: baseColorBoard },
    { color: baseColorBoard },
    { color: baseColorBoard },
    { color: baseColorBoard },
  ],
];
