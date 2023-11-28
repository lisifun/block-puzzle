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

// To start a new game when the game is over and the player broke the highscore
const restartButtonGameOverHighscore = document.getElementById(
  "restart-button-game-over-highscore"
);
restartButtonGameOverHighscore.addEventListener("click", () => {
  newGame.startNewGame();
});

// To switch the mode of the game
const switchButton = document.getElementById("mode-button");
switchButton.addEventListener("click", function toggleMode() {
  const body = document.body;
  const icons = document.getElementsByTagName("i");
  const board = document.getElementById("board");
  // const endScreen = document.getElementById("end-screen-element");

  body.classList.toggle("dark-mode");
  board.classList.toggle("dark-mode");
  //   endScreen.classList.toggle("dark-mode");
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
  // mouseX = pieceProperties.left;
  // mouseY = pieceProperties.top;

  mouseX = e.pageX - difx + 2.5;
  mouseY = e.pageY - dify + 2.5;

  const board = document.getElementById("board");
  const boardDOMRect = board.getBoundingClientRect();

  console.log("Properties", difx, dify);

  // console.log("selected piece => ", selectedPiece);
  // console.log(
  //   "Selected properties ===>",
  //   getCoords(selectedPiece),
  //   mouseX,
  //   mouseY
  // );
  // console.log("selected piece => ", pieces[selectedPiece.id]);

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

function getCoords(element) {
  let properties = element.getBoundingClientRect();

  return {
    top: element.offsetTop,
    left: element.offsetLeft,
  };
}
