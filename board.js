class Board {
  constructor() {
    this.boardElement = document.getElementById("board");
    this.boardStatus = [
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
  }

  // Method to check if the selected piece fits in that part of the board
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

  //  Method to update the board with the selected piece only if the isFitPiece method is true!
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

  // Method to check if the game is over checking if the remaining pieces fit
  isGameOver(piece) {
    for (let i = 0; i < this.boardStatus.length; i++) {
      for (let j = 0; j < this.boardStatus[i].length; j++) {
        let index = i * 10 + j;

        if (this.isFitPiece(piece, index)) {
          return true;
        }
      }
    }
    return false;
  }
}

// Base color for the board in light mode
const baseColorBoard = "#E8E8E8"; // For dark mode => #464646

// Board Matrix Status
// const boardStatus = [
//   [
//     { color: "green" },
//     { color: "green" },
//     { color: baseColorBoard },
//     { color: "green" },
//     { color: "green" },
//     { color: "green" },
//     { color: baseColorBoard },
//     { color: baseColorBoard },
//     { color: "green" },
//     { color: baseColorBoard },
//   ],
//   [
//     { color: "green" },
//     { color: baseColorBoard },
//     { color: baseColorBoard },
//     { color: "green" },
//     { color: baseColorBoard },
//     { color: "green" },
//     { color: "green" },
//     { color: "green" },
//     { color: "green" },
//     { color: "green" },
//   ],
//   [
//     { color: "green" },
//     { color: "green" },
//     { color: "green" },
//     { color: "green" },
//     { color: "green" },
//     { color: baseColorBoard },
//     { color: "green" },
//     { color: "green" },
//     { color: "green" },
//     { color: "green" },
//   ],
//   [
//     { color: baseColorBoard },
//     { color: baseColorBoard },
//     { color: baseColorBoard },
//     { color: baseColorBoard },
//     { color: "green" },
//     { color: baseColorBoard },
//     { color: baseColorBoard },
//     { color: baseColorBoard },
//     { color: "green" },
//     { color: baseColorBoard },
//   ],
//   [
//     { color: "green" },
//     { color: "green" },
//     { color: baseColorBoard },
//     { color: baseColorBoard },
//     { color: "green" },
//     { color: "green" },
//     { color: "green" },
//     { color: baseColorBoard },
//     { color: "green" },
//     { color: "green" },
//   ],
//   [
//     { color: "green" },
//     { color: "green" },
//     { color: "green" },
//     { color: "green" },
//     { color: baseColorBoard },
//     { color: "green" },
//     { color: "green" },
//     { color: "green" },
//     { color: "green" },
//     { color: "green" },
//   ],
//   [
//     { color: "green" },
//     { color: baseColorBoard },
//     { color: "green" },
//     { color: "green" },
//     { color: baseColorBoard },
//     { color: "green" },
//     { color: "green" },
//     { color: "green" },
//     { color: baseColorBoard },
//     { color: baseColorBoard },
//   ],
//   [
//     { color: baseColorBoard },
//     { color: baseColorBoard },
//     { color: baseColorBoard },
//     { color: baseColorBoard },
//     { color: baseColorBoard },
//     { color: "green" },
//     { color: "green" },
//     { color: "green" },
//     { color: "green" },
//     { color: baseColorBoard },
//   ],
//   [
//     { color: "green" },
//     { color: "green" },
//     { color: "green" },
//     { color: "green" },
//     { color: "green" },
//     { color: baseColorBoard },
//     { color: baseColorBoard },
//     { color: "green" },
//     { color: "green" },
//     { color: "green" },
//   ],
//   [
//     { color: "green" },
//     { color: "green" },
//     { color: "green" },
//     { color: "green" },
//     { color: "green" },
//     { color: baseColorBoard },
//     { color: baseColorBoard },
//     { color: "green" },
//     { color: "green" },
//     { color: "green" },
//   ],
// ];

// const boardStatus = [
//   [
//     { color: baseColorBoard },
//     { color: baseColorBoard },
//     { color: baseColorBoard },
//     { color: baseColorBoard },
//     { color: baseColorBoard },
//     { color: baseColorBoard },
//     { color: baseColorBoard },
//     { color: baseColorBoard },
//     { color: baseColorBoard },
//     { color: baseColorBoard },
//   ],
//   [
//     { color: baseColorBoard },
//     { color: baseColorBoard },
//     { color: baseColorBoard },
//     { color: baseColorBoard },
//     { color: baseColorBoard },
//     { color: baseColorBoard },
//     { color: baseColorBoard },
//     { color: baseColorBoard },
//     { color: baseColorBoard },
//     { color: baseColorBoard },
//   ],
//   [
//     { color: baseColorBoard },
//     { color: baseColorBoard },
//     { color: baseColorBoard },
//     { color: baseColorBoard },
//     { color: baseColorBoard },
//     { color: baseColorBoard },
//     { color: baseColorBoard },
//     { color: baseColorBoard },
//     { color: baseColorBoard },
//     { color: baseColorBoard },
//   ],
//   [
//     { color: baseColorBoard },
//     { color: baseColorBoard },
//     { color: baseColorBoard },
//     { color: baseColorBoard },
//     { color: baseColorBoard },
//     { color: baseColorBoard },
//     { color: baseColorBoard },
//     { color: baseColorBoard },
//     { color: baseColorBoard },
//     { color: baseColorBoard },
//   ],
//   [
//     { color: baseColorBoard },
//     { color: baseColorBoard },
//     { color: baseColorBoard },
//     { color: baseColorBoard },
//     { color: baseColorBoard },
//     { color: baseColorBoard },
//     { color: baseColorBoard },
//     { color: baseColorBoard },
//     { color: baseColorBoard },
//     { color: baseColorBoard },
//   ],
//   [
//     { color: baseColorBoard },
//     { color: baseColorBoard },
//     { color: baseColorBoard },
//     { color: baseColorBoard },
//     { color: baseColorBoard },
//     { color: baseColorBoard },
//     { color: baseColorBoard },
//     { color: baseColorBoard },
//     { color: baseColorBoard },
//     { color: baseColorBoard },
//   ],
//   [
//     { color: baseColorBoard },
//     { color: baseColorBoard },
//     { color: baseColorBoard },
//     { color: baseColorBoard },
//     { color: baseColorBoard },
//     { color: baseColorBoard },
//     { color: baseColorBoard },
//     { color: baseColorBoard },
//     { color: baseColorBoard },
//     { color: baseColorBoard },
//   ],
//   [
//     { color: baseColorBoard },
//     { color: baseColorBoard },
//     { color: baseColorBoard },
//     { color: baseColorBoard },
//     { color: baseColorBoard },
//     { color: baseColorBoard },
//     { color: baseColorBoard },
//     { color: baseColorBoard },
//     { color: baseColorBoard },
//     { color: baseColorBoard },
//   ],
//   [
//     { color: baseColorBoard },
//     { color: baseColorBoard },
//     { color: baseColorBoard },
//     { color: baseColorBoard },
//     { color: baseColorBoard },
//     { color: baseColorBoard },
//     { color: baseColorBoard },
//     { color: baseColorBoard },
//     { color: baseColorBoard },
//     { color: baseColorBoard },
//   ],
//   [
//     { color: baseColorBoard },
//     { color: baseColorBoard },
//     { color: baseColorBoard },
//     { color: baseColorBoard },
//     { color: baseColorBoard },
//     { color: baseColorBoard },
//     { color: baseColorBoard },
//     { color: baseColorBoard },
//     { color: baseColorBoard },
//     { color: baseColorBoard },
//   ],
// ];
