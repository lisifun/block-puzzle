const newBoard = new Board();
newBoard.drawBoard();

// To track mouse position and check if the mouse is inside the board
let mouseX;
let mouseY;
let isFitting;
let selectedIndex;
let newChanges;

document.addEventListener("dragover", dragAndDropOntoBoard, false);

function dragAndDropOntoBoard(e) {
  e.preventDefault();
  mouseX = e.pageX;
  mouseY = e.pageY;

  const board = newBoard.boardElement;
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
        isFitting = newBoard.isFitPiece(pieces[Number(selectedPiece.id)], i);
        if (isFitting) {
          selectedIndex = i;
        }
      }
    }
  }
}

// // Current score
// let currentScoreElement = document.getElementById("actual-score");
// let score = Number(currentScoreElement.textContent);
// // Max score
// let maxScoreElement = document.getElementById("max-score");
// let maxScore = Number(maxScoreElement.textContent);

// // Function to update the score
// function updateScore(piece) {
//   for (let i = 0; i < piece.length; i++) {
//     for (let j = 0; j < piece[i].length; j++) {
//       if (piece[i][j].color !== "none") {
//         score++;
//       }
//     }
//   }

//   currentScoreElement.innerText = score;

//   // if (score > maxScore) {
//   //   alert("NEW PERSONAL HIGHSCORE");
//   // }
// }

// // Function to update the score when a line is completed
// function updateScoreCompletedLines(completedRows, completedColumns) {
//   if (completedRows.length !== 0 || completedColumns.length !== 0) {
//     // If more than two lines are completed the score will increment 100. Otherwise will increment 10
//     if (completedRows.length + completedColumns.length > 2) {
//       score += 100;
//     } else {
//       score += completedRows.length * 10 + completedColumns.length * 10;
//     }
//   }
// }
