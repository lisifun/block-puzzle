// VARIABLES

// Background color for light mode
const baseBackgroundColor = "#fbf5f7"; // For dark mode => "#0E1420"

// Base color for light mode
const baseColorBoard = "#EBE9EB"; // For dark mode => '#232C3B

// Board Matrix Status
let boardStatus = [
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
    { color: "#5CB9E4" },
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
    { color: "#5CB9E4" },
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
    { color: "#5CB9E4" },
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
    { color: "#5CB9E4" },
  ],
  [
    { color: "purple" },
    { color: baseColorBoard },
    { color: baseColorBoard },
    { color: baseColorBoard },
    { color: baseColorBoard },
    { color: baseColorBoard },
    { color: baseColorBoard },
    { color: baseColorBoard },
    { color: baseColorBoard },
    { color: "#5CB9E4" },
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
    { color: "#5CB9E4" },
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
    { color: "#5CB9E4" },
  ],
  [
    { color: baseColorBoard },
    { color: "#E45C7D" },
    { color: "#E45C7D" },
    { color: "#E45C7D" },
    { color: "#E45C7D" },
    { color: "#E45C7D" },
    { color: "#E45C7D" },
    { color: "#E45C7D" },
    { color: "#E45C7D" },
    { color: "#5CB9E4" },
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
    { color: "#5CB9E4" },
  ],
  [
    { color: "purple" },
    { color: "green" },
    { color: "green" },
    { color: "blue" },
    { color: baseColorBoard },
    { color: "red" },
    { color: "red" },
    { color: "red" },
    { color: "red" },
    { color: "#232C3B" },
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

// Function to check for completed lines in the board
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
let isFitting;
let selectedIndex;
let newChanges;
let dragDone = false;

document.addEventListener("dragover", dragAndDropOverBoard, false);

function dragAndDropOverBoard(e) {
  e.preventDefault();
  // e = e || window.event;
  mouseX = e.pageX;
  mouseY = e.pageY;

  function mouseLocation() {
    const board = document.getElementById("board");
    const boardDOMRect = board.getBoundingClientRect();

    // Inside the boundaries of the board
    if (
      mouseX >= boardDOMRect.left &&
      mouseX <= boardDOMRect.right &&
      mouseY >= boardDOMRect.top &&
      mouseY <= boardDOMRect.bottom
    ) {
      // The mouse is inside the board
      // Creating a Nodelist of all elements inside the div board
      const boardChildren = board.querySelectorAll(".board-block");

      // To iterate through the Nodelist and find the board's position (i => index) where the user is trying to drop the piece
      for (let i = 0; i < boardChildren.length; i++) {
        let boardChild = boardChildren[i];
        let boardChildDOMRect = boardChild.getBoundingClientRect();
        if (
          mouseX >= boardChildDOMRect.left &&
          mouseX <= boardChildDOMRect.right &&
          mouseY >= boardChildDOMRect.top &&
          mouseY <= boardChildDOMRect.bottom
        ) {
          // Checking if is possible to drop the selected piece in that place of the board
          isFitting = isFitPiece(
            pieces[Number(selectedPiece.id)],
            boardStatus,
            i
          );
          if (isFitting) {
            selectedIndex = i;
            // newChanges = updateBoardWithPiece(
            //   pieces[Number(selectedPiece.id)],
            //   boardStatus,
            //   i
            // );
            // console.log("line 276 script.js selectedPiece => ", selectedPiece);
            // console.log("line 277 script.js isFitting => ", isFitting);
            // console.log("line 278 script.js newChanges => ", newChanges);
          }
          // if (isFitting) {
          //   console.log("266", dragDone);
          //   setTimeout(() => {
          //     if (dragDone) {
          //       let newChanges = updateBoardWithPiece(
          //         pieces[Number(selectedPiece.id)],
          //         boardStatus,
          //         i
          //       );
          //       console.log("line 270", newChanges);
          //       // setTimeout(() => {
          //       //   newChanges = null;
          //       // }, 500);
          //       drawBoard(checkCompletedLines(newChanges));
          //     }
          //   }, 100);
          // }
        }
      }
    }
    // else {
    //   return false;
    // }
  }

  mouseLocation();
}

// Function to check if a piece can fit in the board
function isFitPiece(piece, boardStatus, index) {
  const rowSelected = Math.floor(index / 10);
  const columnSelected = index % 10;

  for (let i = 0; i < piece.length; i++) {
    for (let j = 0; j < piece[i].length; j++) {
      // console.log(
      //   "Line 286 color ==>",
      //   boardStatus[rowSelected + i][columnSelected + j]
      // );
      if (piece[i][j].color === baseBackgroundColor) {
        continue;
      } // e {
      // console.log(
      //   "Line 289 color ==>",
      //   boardStatus[rowSelected + i][columnSelected + j].color
      // );
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
  // isFitting = true;
  // setTimeout(() => {
  //   isFitting = false;
  // }, 1000);
  return true;
}

// Function to update the board with the new selected piece
function updateBoardWithPiece(piece, boardStatus, index) {
  const rowSelected = Math.floor(index / 10);
  const columnSelected = index % 10;

  for (let i = 0; i < piece.length; i++) {
    for (let j = 0; j < piece[i].length; j++) {
      if (piece[i][j].color === baseBackgroundColor) {
        continue;
      } else {
        boardStatus[rowSelected + i][columnSelected + j].color =
          piece[i][j].color;
      }
    }
  }
  return boardStatus;
}

// Function to check if there is space in the board for the remaining pieces
function isGameOver(randomPieces, boardStatus) {
  for (let piece of randomPieces) {
    console.log(piece);
  }
}

const randomPiecesTest = document.getElementById("random-pieces");
console.log(randomPiecesTest);
// console.log(isGameOver(,boardStatus))
