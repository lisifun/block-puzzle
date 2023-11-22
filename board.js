class Board {
  constructor() {
    this.boardElement = document.getElementById("board");
    this.boardStatus = boardStatus;
  }

  boardBlock() {
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

  checkCompletedLines() {
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
    return [completedRows, completedColumns];
  }

  cleanCompletedLines() {
    if (
      this.checkCompletedLines()[0].length !== 0 ||
      this.checkCompletedLines()[1].length !== 0
    ) {
      // To clean the completed rows
      completedRows.forEach(
        (row) =>
          (this.boardStatus[row] = [
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
          ])
      );

      // To clean the completed columns
      completedColumns.forEach((column) => {
        for (let i = 0; i < this.boardStatus.length; i++) {
          this.boardStatus[i][column] = { color: baseColorBoard };
        }
      });
    }
    return this.boardStatus;
  }

  isGameOver(piece) {
    // To check if there are no more space for the pieces

    for (let i = 0; i < this.boardStatus.length; i++) {
      for (let j = 0; j < this.boardStatus[i].length; j++) {
        if (this.boardStatus[i][j].color === baseColorBoard) {
          let index = i * 10 + j;
          if (this.isFitPiece(piece, this.boardStatus, index)) {
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
