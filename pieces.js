// Pieces of the game
let pieces = [
  [[{ color: "#6A78CC" }]], // index => 0  piece => single block
  [[{ color: "#FDBB30" }, { color: "#FDBB30" }]], // index => 1  piece => two horizontal blocks
  [[{ color: "#FDBB30" }], [{ color: "#FDBB30" }]], // index => 2 piece => two vertical blocks
  [[{ color: "#E6833B" }, { color: "#E6833B" }, { color: "#E6833B" }]], // index => 3 piece => three horizontal blocks
  [[{ color: "#E6833B" }], [{ color: "#E6833B" }], [{ color: "#E6833B" }]], // index => 4 piece => three vertical blocks
  [
    [
      { color: "#DE516E" },
      { color: "#DE516E" },
      { color: "#DE516E" },
      { color: "#DE516E" },
    ],
  ], // index => 5 piece => four horizontal blocks
  [
    [{ color: "#DE516E" }],
    [{ color: "#DE516E" }],
    [{ color: "#DE516E" }],
    [{ color: "#DE516E" }],
  ], // index => 6 piece => four vertical blocks
  [
    [{ color: "#89D844" }, { color: "#89D844" }],
    [{ color: "#89D844" }, { color: "#89D844" }],
  ], // index => 7 piece => square
  [
    [
      { color: "#D14E43" },
      { color: "#D14E43" },
      { color: "#D14E43" },
      { color: "#D14E43" },
      { color: "#D14E43" },
    ],
  ], // index => 8 piece => five horizontal blocks
  [
    [{ color: "#D14E43" }],
    [{ color: "#D14E43" }],
    [{ color: "#D14E43" }],
    [{ color: "#D14E43" }],
    [{ color: "#D14E43" }],
  ], // index => 9 piece => five vertical blocks
  [
    [{ color: "#43CEA0" }, { color: "#43CEA0" }, { color: "#43CEA0" }],
    [{ color: "#43CEA0" }, { color: "#43CEA0" }, { color: "#43CEA0" }],
    [{ color: "#43CEA0" }, { color: "#43CEA0" }, { color: "#43CEA0" }],
  ], // index => 10 piece => cube
  [
    [{ color: "#4CC273" }, { color: "none" }],
    [{ color: "#4CC273" }, { color: "#4CC273" }],
  ], // index => 11 piece => short L (left bottom corner)
  [
    [{ color: "none" }, { color: "#4CC273" }],
    [{ color: "#4CC273" }, { color: "#4CC273" }],
  ], // index => 12 piece => short L (right bottom corner)
  [
    [{ color: "#4CC273" }, { color: "#4CC273" }],
    [{ color: "#4CC273" }, { color: "none" }],
  ], // index => 13 piece => short L (left top corner)
  [
    [{ color: "#4CC273" }, { color: "#4CC273" }],
    [{ color: "none" }, { color: "#4CC273" }],
  ], // index => 14 piece => short L (right top corner)
  [
    [{ color: "#4EB1DD" }, { color: "none" }, { color: "none" }],
    [{ color: "#4EB1DD" }, { color: "none" }, { color: "none" }],
    [{ color: "#4EB1DD" }, { color: "#4EB1DD" }, { color: "#4EB1DD" }],
  ], // index => 15 piece => large L (left bottom corner)
  [
    [{ color: "none" }, { color: "none" }, { color: "#4EB1DD" }],
    [{ color: "none" }, { color: "none" }, { color: "#4EB1DD" }],
    [{ color: "#4EB1DD" }, { color: "#4EB1DD" }, { color: "#4EB1DD" }],
  ], // index => 16 piece => large L (right bottom corner)
  [
    [{ color: "#4EB1DD" }, { color: "#4EB1DD" }, { color: "#4EB1DD" }],
    [{ color: "#4EB1DD" }, { color: "none" }, { color: "none" }],
    [{ color: "#4EB1DD" }, { color: "none" }, { color: "none" }],
  ], // index => 17 piece => large L (left top corner)
  [
    [{ color: "#4EB1DD" }, { color: "#4EB1DD" }, { color: "#4EB1DD" }],
    [{ color: "none" }, { color: "none" }, { color: "#4EB1DD" }],
    [{ color: "none" }, { color: "none" }, { color: "#4EB1DD" }],
  ], // index => 18 piece => large L (right top corner)
];

// Save the selected piece in the variable
let selectedPiece;

//Function to draw a piece
function drawPiece(ramdomIndex) {
  let piece = pieces[ramdomIndex];

  // To create a new div element
  let newPiece = document.createElement("div");
  newPiece.id = ramdomIndex;
  newPiece.className = "new-piece";

  // With this attribute we can dragg the piece to the board
  newPiece.setAttribute("draggable", "true");
  newPiece.addEventListener("dragstart", drag);
  newPiece.addEventListener("dragend", drop);

  for (let i = 0; i < piece.length; i++) {
    let newRowBlocks = document.createElement("div");
    newRowBlocks.className = "new-row-blocks";

    for (let j = 0; j < piece[i].length; j++) {
      let newBlock = document.createElement("div");
      newBlock.className = "new-block";

      newBlock.style.borderRadius = "5px";
      newBlock.style.width = "30px";
      newBlock.style.height = "30px";
      newBlock.style.backgroundColor = piece[i][j].color;
      newBlock.style.margin = "2.5px";

      newRowBlocks.appendChild(newBlock);
    }
    newPiece.appendChild(newRowBlocks);
  }

  randomPieces.appendChild(newPiece);
  return newPiece;
}

// Function to generate a ramdom index and return a random element
function selectRandomPiece(arr) {
  let index = Math.floor(Math.random() * arr.length);
  return index;
}

function pickThree() {
  let index1 = selectRandomPiece(pieces);
  let index2 = selectRandomPiece(pieces);
  let index3 = selectRandomPiece(pieces);

  drawPiece(index1);
  drawPiece(index2);
  drawPiece(index3);
}

// Function to resize the blocks of the selected piece
function resizeBlocks(piece, newWidth, newHeight) {
  let blocks = piece.querySelectorAll(".new-block");

  for (let i = 0; i < blocks.length; i++) {
    blocks[i].style.width = `${newWidth}px`;
    blocks[i].style.height = `${newHeight}px`;
  }
}

// To drag the piece
function drag(e) {
  selectedPiece = e.target;

  e.dataTransfer.setData("text", e.target.id);
  selectedPiece.style.transition = "opacity 10000s";
  selectedPiece.style.opacity = 0;

  resizeBlocks(selectedPiece, 40, 40);
}

// Random pieces
let randomPieces = document.getElementById("random-pieces");
// To drop the piece
async function drop(e) {
  if (isFitting) {
    let newChanges = newGame.board.updateBoardWithPiece(
      pieces[Number(selectedPiece.id)],
      selectedIndex
    );

    currentBoardStatus = checkAndCleanCompletedLines(
      drawBoard(newChanges, newGame.board.boardElement),
      newGame.board.boardElement
    );

    newGame.updateScoreDropPiece(pieces[selectedPiece.id]);

    randomPieces.removeChild(selectedPiece);
    if (randomPieces.childNodes.length === 0) {
      pickThree();
    }

    isFitting = false;
  }

  // To check if the game is Over
  let result = [];

  await new Promise((r) => setTimeout(r, 1000));
  for (let i = 0; i < randomPieces.childNodes.length; i++) {
    let piece = pieces[Number(randomPieces.childNodes[i].id)];
    result.push(newGame.board.isGameOver(piece, newGame.board.boardStatus));
  }

  if (!result.includes(true)) {
    newGame.gameIsOver = true;
    newGame.gameOver();
  }
}
