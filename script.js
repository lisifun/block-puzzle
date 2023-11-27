let newGame;
newGame = new Game();
newGame.open();

let newBoard;
newBoard = new Board();
const newBoardElement = newBoard.boardElement;
const newBoardStatus = newBoard.boardStatus;

drawBoard(newBoardStatus, newBoardElement);

// To restart the game with the button
// To show the box container when the player wants to restart the game
const restartButton = document.getElementById("restart-button");
restartButton.addEventListener("click", () => {
  newGame.startNewGame();
});

// To switch the mode of the game
const switchButton = document.getElementById("mode-button");
switchButton.addEventListener("click", function toggleMode() {
  const body = document.body;
  const icons = document.getElementsByTagName("i");
  const board = document.getElementById("board");
  // const endScreen = document.getElementById("end-screen-element");

  console.log(board.childNodes);

  body.classList.toggle("dark-mode");
  board.classList.toggle("dark-mode");
  //   endScreen.classList.toggle("dark-mode");
  for (let icon of icons) {
    icon.classList.toggle("dark-mode");
  }

  // i need to change the color of the block and for that i also need to modify the functiond draw!!!!
  // for (let block of board.childNodes) {
  //   block.style.backgroundColor = "#464646";
  // }
});

// To track mouse position and check if the mouse is inside the board
let mouseX;
let mouseY;
let isFitting;
let selectedIndex;
let newChanges;
let currentBoardStatus;

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
