// Background color for light mode
const baseBackgroundColor = "#fbf5f7"; // For dark mode => "#0E1420"

// Base color for the board in light mode
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

  updateScoreCompletedLines(completedRows, completedColumns);

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
          }
        }
      }
    }
  }

  mouseLocation();
}

// Function to check if a piece can fit in the board
function isFitPiece(piece, boardStatus, index) {
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
  }

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
function isGameOver(piece, boardStatus) {
  for (let i = 0; i < boardStatus.length; i++) {
    for (let j = 0; j < boardStatus[i].length; j++) {
      if (boardStatus[i][j].color === baseColorBoard) {
        let index = i * 10 + j;
        if (isFitPiece(piece, boardStatus, index)) {
          return true;
        }
      } else {
        continue;
      }
    }
  }
  return false;
}

// Current score
let currentScoreElement = document.getElementById("actual-score");
let score = Number(currentScoreElement.textContent);
// Max score
let maxScoreElement = document.getElementById("max-score");
let maxScore = Number(maxScoreElement.textContent);

// Function to update the score
function updateScore(piece) {
  for (let i = 0; i < piece.length; i++) {
    for (let j = 0; j < piece[i].length; j++) {
      if (piece[i][j].color !== baseBackgroundColor) {
        score++;
      }
    }
  }

  currentScoreElement.innerText = score;

  // if (score > maxScore) {
  //   alert("NEW PERSONAL HIGHSCORE");
  // }
}

// Function to update the score when a line is completed
function updateScoreCompletedLines(completedRows, completedColumns) {
  if (completedRows.length !== 0 || completedColumns.length !== 0) {
    // If more than two lines are completed the score will increment 100. Otherwise will increment 10
    if (completedRows.length + completedColumns.length > 2) {
      score += 100;
    } else {
      score += completedRows.length * 10 + completedColumns.length * 10;
    }
  }
}
