// VARIABLES
// console.log(document.getElementById("game-screen").getBoundingClientRect());
// Background color for light mode
const baseBackgroundColor = "#fbf5f7"; // For dark mode => "#0E1420"

// Base color for light mode
const baseColorBoard = "#EBE9EB"; // For dark mode => '#232C3B

// Board Matrix
let boardStatus = [
  [
    { num: 0, color: baseColorBoard },
    { num: 1, color: baseColorBoard },
    { num: 2, color: baseColorBoard },
    { num: 3, color: baseColorBoard },
    { num: 4, color: baseColorBoard },
    { num: 5, color: baseColorBoard },
    { num: 6, color: baseColorBoard },
    { num: 7, color: baseColorBoard },
    { num: 8, color: baseColorBoard },
    { num: 9, color: "#5CB9E4" },
  ],
  [
    { num: 10, color: baseColorBoard },
    { num: 11, color: baseColorBoard },
    { num: 12, color: baseColorBoard },
    { num: 13, color: baseColorBoard },
    { num: 14, color: baseColorBoard },
    { num: 15, color: baseColorBoard },
    { num: 16, color: baseColorBoard },
    { num: 17, color: baseColorBoard },
    { num: 18, color: baseColorBoard },
    { num: 19, color: "#5CB9E4" },
  ],
  [
    { num: 20, color: baseColorBoard },
    { num: 21, color: baseColorBoard },
    { num: 22, color: baseColorBoard },
    { num: 23, color: baseColorBoard },
    { num: 24, color: baseColorBoard },
    { num: 25, color: baseColorBoard },
    { num: 26, color: baseColorBoard },
    { num: 27, color: baseColorBoard },
    { num: 28, color: baseColorBoard },
    { num: 29, color: "#5CB9E4" },
  ],
  [
    { num: 30, color: baseColorBoard },
    { num: 31, color: baseColorBoard },
    { num: 32, color: baseColorBoard },
    { num: 33, color: baseColorBoard },
    { num: 34, color: baseColorBoard },
    { num: 35, color: baseColorBoard },
    { num: 36, color: baseColorBoard },
    { num: 37, color: baseColorBoard },
    { num: 38, color: baseColorBoard },
    { num: 39, color: "#5CB9E4" },
  ],
  [
    { num: 40, color: "purple" },
    { num: 41, color: baseColorBoard },
    { num: 42, color: baseColorBoard },
    { num: 43, color: baseColorBoard },
    { num: 44, color: baseColorBoard },
    { num: 45, color: baseColorBoard },
    { num: 46, color: baseColorBoard },
    { num: 47, color: baseColorBoard },
    { num: 48, color: baseColorBoard },
    { num: 49, color: "#5CB9E4" },
  ],
  [
    { num: 50, color: baseColorBoard },
    { num: 51, color: baseColorBoard },
    { num: 52, color: baseColorBoard },
    { num: 53, color: baseColorBoard },
    { num: 54, color: baseColorBoard },
    { num: 55, color: baseColorBoard },
    { num: 56, color: baseColorBoard },
    { num: 57, color: baseColorBoard },
    { num: 58, color: baseColorBoard },
    { num: 59, color: "#5CB9E4" },
  ],
  [
    { num: 60, color: baseColorBoard },
    { num: 61, color: baseColorBoard },
    { num: 62, color: baseColorBoard },
    { num: 63, color: baseColorBoard },
    { num: 64, color: baseColorBoard },
    { num: 65, color: baseColorBoard },
    { num: 66, color: baseColorBoard },
    { num: 67, color: baseColorBoard },
    { num: 68, color: baseColorBoard },
    { num: 69, color: "#5CB9E4" },
  ],
  [
    { num: 70, color: baseColorBoard },
    { num: 71, color: "#E45C7D" },
    { num: 72, color: "#E45C7D" },
    { num: 73, color: "#E45C7D" },
    { num: 74, color: "#E45C7D" },
    { num: 75, color: "#E45C7D" },
    { num: 76, color: "#E45C7D" },
    { num: 77, color: "#E45C7D" },
    { num: 78, color: "#E45C7D" },
    { num: 79, color: "#5CB9E4" },
  ],
  [
    { num: 80, color: baseColorBoard },
    { num: 81, color: baseColorBoard },
    { num: 82, color: baseColorBoard },
    { num: 83, color: baseColorBoard },
    { num: 84, color: baseColorBoard },
    { num: 85, color: baseColorBoard },
    { num: 86, color: baseColorBoard },
    { num: 87, color: baseColorBoard },
    { num: 88, color: baseColorBoard },
    { num: 89, color: "#5CB9E4" },
  ],
  [
    { num: 90, color: "purple" },
    { num: 91, color: "green" },
    { num: 92, color: "green" },
    { num: 93, color: "blue" },
    { num: 94, color: baseColorBoard },
    { num: 95, color: "red" },
    { num: 96, color: "red" },
    { num: 97, color: "red" },
    { num: 98, color: "red" },
    { num: 99, color: "#232C3B" },
  ],
];

// FUNCTIONS
// Function to create the board blocks
function createBlock(color) {
  // To create a new div element
  const newBlock = document.createElement("div");

  // To give a className to the new div element
  newBlock.className = "board-block";

  // To set some content and style for the new div element
  newBlock.style.width = "40px";
  newBlock.style.height = "40px";
  newBlock.style.borderRadius = "5px";
  newBlock.style.backgroundColor = color;

  // To append the new div element to an existing div element (Accessing by its ID)
  const board = document.getElementById("board");
  board.appendChild(newBlock);
}

// Function to draw the board
function drawBoard(matrix) {
  // To change the selected div element
  const board = document.getElementById("board");
  board.innerHTML = "";

  // A loop to iterate over the matrix and then call the createBlock function to add all the new blocks to the clean board
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      createBlock(matrix[i][j].color);
    }
  }
}

// Function to iterate over the board and check for completed lines
function checkCompletedLines(matrix) {
  // Two variables to save the index when a row or a column is completed
  let completedRows = [];
  let completedColumns = [];

  // To check if there are any row (horizontal line) is completed
  for (let i = 0; i < matrix.length; i++) {
    let row = matrix[i];
    let test = row.filter((block) => block.color === baseColorBoard);
    if (test.length === 0) {
      completedRows.push(i);
    }
  }

  // To check if there are any column (vertical line) is completed
  for (let j = 0; j < matrix[0].length; j++) {
    let column = [];
    for (let i = 0; i < matrix.length; i++) {
      column.push(matrix[i][j]);
    }
    let test = column.filter((block) => block.color === baseColorBoard);
    if (test.length === 0) {
      completedColumns.push(j);
    }
  }

  // To clean the completed rows
  completedRows.forEach(
    (row) =>
      (matrix[row] = [
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
    for (let i = 0; i < matrix.length; i++) {
      matrix[i][column] = { color: baseColorBoard };
    }
  });

  return matrix;
}

drawBoard(boardStatus);
drawBoard(checkCompletedLines(boardStatus));

// To track mouse position and check if the mouse is inside the board
let mouseX;
let mouseY;

document.addEventListener("dragover", onMouseUpdate, false);

function onMouseUpdate(e) {
  e = e || window.event;
  mouseX = e.pageX;
  mouseY = e.pageY;
  // console.log(x, y);
  function mouseLocation() {
    const board = document.getElementById("board");
    const boardDOMRect = board.getBoundingClientRect();

    if (
      mouseX >= boardDOMRect.left &&
      mouseX <= boardDOMRect.right &&
      mouseY >= boardDOMRect.top &&
      mouseY <= boardDOMRect.bottom
    ) {
      // console.log(true);
      const boardChildren = board.querySelectorAll(".board-block");
      for (let i = 0; i < boardChildren.length; i++) {
        let boardChild = boardChildren[i];
        let boardChildDOMRect = boardChild.getBoundingClientRect();
        if (
          mouseX >= boardChildDOMRect.left &&
          mouseX <= boardChildDOMRect.right &&
          mouseY >= boardChildDOMRect.top &&
          mouseY <= boardChildDOMRect.bottom
        ) {
          console.log(pieces);
          console.log(selectedPiece);
          console.log(typeof selectedPiece.id, selectedPiece.id);
          console.log(
            typeof Number(selectedPiece.id),
            Number(selectedPiece.id)
          );
          console.log(pieces[Number(selectedPiece.id)]);
          console.log(
            isFitPiece(pieces[Number(selectedPiece.id)], boardStatus, i)
          );
          if (isFitPiece(pieces[Number(selectedPiece.id)], boardStatus, i)) {
            console.log("hiii");
            let newChanges = updateBoardWithPiece(
              boardStatus,
              pieces[Number(selectedPiece.id)],
              i
            );
            console.log(newChanges);
            drawBoard(checkCompletedLines(newChanges));
          }
        }
      }
    } else {
      return false;
    }
  }

  mouseLocation();
}

// Function to check if a piece can fit in the board
function isFitPiece(piece, boardStatus, index) {
  const rowSelected = Math.floor(index / 10);
  const columnSelected = index % 10;

  for (let i = 0; i < piece.length; i++) {
    for (let j = 0; j < piece[i].length; j++) {
      if (piece[i][j].color === baseBackgroundColor) {
        continue;
      } else {
        if (
          boardStatus[rowSelected + i][columnSelected + j].color ===
          baseColorBoard
        ) {
          continue;
        } else {
          return false;
        }
      }
    }
  }
  return true;
}

// Function to update the board with the new selected piece
function updateBoardWithPiece(boardStatus, piece, index) {
  const rowSelected = Math.floor(index / 10);
  const columnSelected = index % 10;

  for (let i = 0; i < piece.length; i++) {
    for (let j = 0; j < piece[i].length; j++) {
      if (piece[i][j].color === baseBackgroundColor) {
        continue;
      } else {
        console.log("hellooooo");
        console.log(
          typeof rowSelected,
          rowSelected,
          typeof columnSelected,
          columnSelected
        );
        console.log(
          rowSelected + i,
          columnSelected + j,
          i,
          j,
          boardStatus.length,
          boardStatus[0].length
        );
        boardStatus[rowSelected + i][columnSelected + j].color =
          piece[i][j].color;
      }
    }
  }
  return boardStatus;
}
