class Board {
  constructor() {
    this.boardElement = document.getElementById("board");
    this.boardStatus = boardStatus;
  }

  isFitPiece(piece, index) {
    console.log("INSIDE isFitPiece FUNCTION");
    console.log("SELECTED PIECE => ", piece);
    console.log("SELECTED INDEX => ", index);

    const rowSelected = Math.floor(index / 10);
    const columnSelected = index % 10;

    console.log("index => ", rowSelected, columnSelected);
    if (
      rowSelected + piece.length > 10 ||
      columnSelected + piece[0].length > 10
    ) {
      console.log("Outside the board");
      return false;
    } else {
      console.log("INside the board");
      for (let i = 0; i < piece.length; i++) {
        for (let j = 0; j < piece[i].length; j++) {
          console.log(
            "Iterating over the piece => pair => ",
            i,
            j,
            piece[i][j].color
          );
          if (piece[i][j].color === "none") {
            console.log("this color is not important");
            continue;
          } else {
            console.log("lets analyze this color");
            console.log(
              "the color in the board in the pair => ",
              rowSelected + i,
              columnSelected + j,
              this.boardStatus[rowSelected + i][columnSelected + j].color
            );
            if (
              this.boardStatus[rowSelected + i][columnSelected + j].color ===
              baseColorBoard
            ) {
              continue;
            } else {
              console.log(
                "sorry, but this block of the board has been taken so you cannot drop the piece here"
              );
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

  isGameOver(piece) {
    console.log("FUNCTION isGameOver");
    for (let i = 0; i < this.boardStatus.length; i++) {
      for (let j = 0; j < this.boardStatus[i].length; j++) {
        if (this.boardStatus[i][j].color === baseColorBoard) {
          console.log("first pair free in the board");
          let index = i * 10 + j;
          console.log("piece to check", piece);
          console.log("index to check => ", i, j);
          console.log(
            "so, this index is going to be pass to the isFitPiece function => ",
            index
          );
          if (this.isFitPiece(piece, index)) {
            console.log(
              "FUNCTION isFitPiece => ",
              this.isFitPiece(piece, index)
            );
            console.log("perfect, that piece fit in the board");
            return true;
          }
        } else {
          continue;
        }
      }
    }
    console.log("FUNCTION isFitPiece => false");
    console.log("sorry, that piece doesnt fit in the board");
    return false;
  }
}

// Base color for the board in light mode
const baseColorBoard = "#E8E8E8"; // For dark mode => #464646

// Board Matrix Status
const boardStatus = [
  [
    { color: "green" },
    { color: "green" },
    { color: baseColorBoard },
    { color: "green" },
    { color: "green" },
    { color: "green" },
    { color: baseColorBoard },
    { color: baseColorBoard },
    { color: "green" },
    { color: baseColorBoard },
  ],
  [
    { color: "green" },
    { color: baseColorBoard },
    { color: baseColorBoard },
    { color: "green" },
    { color: baseColorBoard },
    { color: "green" },
    { color: "green" },
    { color: "green" },
    { color: "green" },
    { color: "green" },
  ],
  [
    { color: "green" },
    { color: "green" },
    { color: "green" },
    { color: "green" },
    { color: "green" },
    { color: baseColorBoard },
    { color: "green" },
    { color: "green" },
    { color: "green" },
    { color: "green" },
  ],
  [
    { color: baseColorBoard },
    { color: baseColorBoard },
    { color: baseColorBoard },
    { color: baseColorBoard },
    { color: "green" },
    { color: baseColorBoard },
    { color: baseColorBoard },
    { color: baseColorBoard },
    { color: "green" },
    { color: baseColorBoard },
  ],
  [
    { color: "green" },
    { color: "green" },
    { color: baseColorBoard },
    { color: baseColorBoard },
    { color: "green" },
    { color: "green" },
    { color: "green" },
    { color: baseColorBoard },
    { color: "green" },
    { color: "green" },
  ],
  [
    { color: "green" },
    { color: "green" },
    { color: "green" },
    { color: "green" },
    { color: baseColorBoard },
    { color: "green" },
    { color: "green" },
    { color: "green" },
    { color: "green" },
    { color: "green" },
  ],
  [
    { color: "green" },
    { color: baseColorBoard },
    { color: "green" },
    { color: "green" },
    { color: baseColorBoard },
    { color: "green" },
    { color: "green" },
    { color: "green" },
    { color: baseColorBoard },
    { color: baseColorBoard },
  ],
  [
    { color: baseColorBoard },
    { color: baseColorBoard },
    { color: baseColorBoard },
    { color: baseColorBoard },
    { color: baseColorBoard },
    { color: "green" },
    { color: "green" },
    { color: "green" },
    { color: "green" },
    { color: baseColorBoard },
  ],
  [
    { color: "green" },
    { color: "green" },
    { color: "green" },
    { color: "green" },
    { color: "green" },
    { color: baseColorBoard },
    { color: baseColorBoard },
    { color: "green" },
    { color: "green" },
    { color: "green" },
  ],
  [
    { color: "green" },
    { color: "green" },
    { color: "green" },
    { color: "green" },
    { color: "green" },
    { color: baseColorBoard },
    { color: baseColorBoard },
    { color: "green" },
    { color: "green" },
    { color: "green" },
  ],
];

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
