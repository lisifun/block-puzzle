let newGame = new Game();
newGame.open();

// To restart the game if the player want to start over
const restartButton = document.getElementById("restart-button");
restartButton.addEventListener("click", () => {
  newGame.restartGame();
});

// To start a new game when the game is over
const restartButtonGameOver = document.getElementById(
  "restart-button-game-over"
);
restartButtonGameOver.addEventListener("click", () => {
  newGame.startNewGame();
});

// To save the game at the end
const saveGameButton = document.getElementById("save-game");
saveGameButton.addEventListener("click", () => {
  newGame.saveGame();
});

// To submit the info's player
const submitButton = document.getElementById("submit-button");
submitButton.addEventListener("click", () => {
  var name = document.getElementById("name").value;
  var score = newGame.score;
  if (name === "") {
    alert("Please fill in the field");
    return;
  }

  newGame.saveGameScreen.style.display = "none";
});

// To switch the mode of the game
const switchButton = document.getElementById("mode-button");
switchButton.addEventListener("click", function toggleMode() {
  const body = document.body;
  const icons = document.getElementsByTagName("i");
  const board = document.getElementById("board");

  body.classList.toggle("dark-mode");
  board.classList.toggle("dark-mode");
  for (let icon of icons) {
    icon.classList.toggle("dark-mode");
  }
});

// To track mouse position and check if the mouse is inside the board
let mouseX;
let mouseY;

let difx;
let dify;

let isFitting;
let selectedIndex;
let newChanges;
let currentBoardStatus;

document.addEventListener("dragover", dragAndDropOntoBoard, false);

function dragAndDropOntoBoard(e) {
  e.preventDefault();
  let pieceProperties = selectedPiece.getBoundingClientRect();
  mouseX = e.pageX - difx + 2;
  mouseY = e.pageY - dify + 2;

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

        isFitting = newGame.board.isFitPiece(
          pieces[Number(selectedPiece.id)],
          i
        );
        if (isFitting) {
          selectedIndex = i;
        }
      }
    }
  }
}
