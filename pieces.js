// class Piece {
//   constructor() {
//     // This properties
//   }

//   randomPiece() {
//     // To select a random piece
//   }

//   drawPice() {
//     // To draw the piece
//   }

//   piecesToDragAndDrop() {
//     // This is going to be a array with 3 random pieces
//   }

//   checkForPieces() {
//     // If the length of the array of pieces is === 0, we have to add 3 new random pieces
//   }

//   toRotatePieces() {
//     // To rotate the pieces in the array
//   }
// }

// Pieces of the game
let pieces = [
  [[{ color: "#7883D5" }]], // index => 0  piece => single block
  [[{ color: "#FDBB30" }, { color: "#FDBB30" }]], // index => 1  piece => two horizontal blocks
  [[{ color: "#FDBB30" }], [{ color: "#FDBB30" }]], // index => 2 piece => two vertical blocks
  [[{ color: "#EC8E48" }, { color: "#EC8E48" }, { color: "#EC8E48" }]], // index => 3 piece => three horizontal blocks
  [[{ color: "#EC8E48" }], [{ color: "#EC8E48" }], [{ color: "#EC8E48" }]], // index => 4 piece => three vertical blocks
  [
    [
      { color: "#E45C7D" },
      { color: "#E45C7D" },
      { color: "#E45C7D" },
      { color: "#E45C7D" },
    ],
  ], // index => 5 piece => four horizontal blocks
  [
    [{ color: "#E45C7D" }],
    [{ color: "#E45C7D" }],
    [{ color: "#E45C7D" }],
    [{ color: "#E45C7D" }],
  ], // index => 6 piece => four vertical blocks
  [
    [{ color: "#98DF53" }, { color: "#98DF53" }],
    [{ color: "#98DF53" }, { color: "#98DF53" }],
  ], // index => 7 piece => square
  [
    [
      { color: "#DA5753" },
      { color: "#DA5753" },
      { color: "#DA5753" },
      { color: "#DA5753" },
      { color: "#DA5753" },
    ],
  ], // index => 8 piece => five horizontal blocks
  [
    [{ color: "#DA5753" }],
    [{ color: "#DA5753" }],
    [{ color: "#DA5753" }],
    [{ color: "#DA5753" }],
    [{ color: "#DA5753" }],
  ], // index => 9 piece => five vertical blocks
  [
    [{ color: "#51D4AE" }, { color: "#51D4AE" }, { color: "#51D4AE" }],
    [{ color: "#51D4AE" }, { color: "#51D4AE" }, { color: "#51D4AE" }],
    [{ color: "#51D4AE" }, { color: "#51D4AE" }, { color: "#51D4AE" }],
  ], // index => 10 piece => cube
  [
    [{ color: "#59C980" }, { color: baseBackgroundColor }],
    [{ color: "#59C980" }, { color: "#59C980" }],
  ], // index => 11 piece => short L (left bottom corner)
  [
    [{ color: baseBackgroundColor }, { color: "#59C980" }],
    [{ color: "#59C980" }, { color: "#59C980" }],
  ], // index => 12 piece => short L (right bottom corner)
  [
    [{ color: "#59C980" }, { color: "#59C980" }],
    [{ color: "#59C980" }, { color: baseBackgroundColor }],
  ], // index => 13 piece => short L (left top corner)
  [
    [{ color: "#59C980" }, { color: "#59C980" }],
    [{ color: baseBackgroundColor }, { color: "#59C980" }],
  ], // index => 14 piece => short L (right top corner)
  [
    [
      { color: "#5CB9E4" },
      { color: baseBackgroundColor },
      { color: baseBackgroundColor },
    ],
    [
      { color: "#5CB9E4" },
      { color: baseBackgroundColor },
      { color: baseBackgroundColor },
    ],
    [{ color: "#5CB9E4" }, { color: "#5CB9E4" }, { color: "#5CB9E4" }],
  ], // index => 15 piece => large L (left bottom corner)
  [
    [
      { color: baseBackgroundColor },
      { color: baseBackgroundColor },
      { color: "#5CB9E4" },
    ],
    [
      { color: baseBackgroundColor },
      { color: baseBackgroundColor },
      { color: "#5CB9E4" },
    ],
    [{ color: "#5CB9E4" }, { color: "#5CB9E4" }, { color: "#5CB9E4" }],
  ], // index => 16 piece => large L (right bottom corner)
  [
    [{ color: "#5CB9E4" }, { color: "#5CB9E4" }, { color: "#5CB9E4" }],
    [
      { color: "#5CB9E4" },
      { color: baseBackgroundColor },
      { color: baseBackgroundColor },
    ],
    [
      { color: "#5CB9E4" },
      { color: baseBackgroundColor },
      { color: baseBackgroundColor },
    ],
  ], // index => 17 piece => large L (left top corner)
  [
    [{ color: "#5CB9E4" }, { color: "#5CB9E4" }, { color: "#5CB9E4" }],
    [
      { color: baseBackgroundColor },
      { color: baseBackgroundColor },
      { color: "#5CB9E4" },
    ],
    [
      { color: baseBackgroundColor },
      { color: baseBackgroundColor },
      { color: "#5CB9E4" },
    ],
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
  newPiece.addEventListener("click", function savePiece() {
    selectedPiece = newPiece;
    console.log(selectedPiece);
  });

  for (let i = 0; i < piece.length; i++) {
    let newRowBlocks = document.createElement("div");
    newRowBlocks.className = "new-row-blocks";

    for (let j = 0; j < piece[i].length; j++) {
      let newBlock = document.createElement("div");
      newBlock.className = "new-block";

      newBlock.style.borderRadius = "5px";
      newBlock.style.width = "40px";
      newBlock.style.height = "40px";
      newBlock.style.backgroundColor = piece[i][j].color;
      newBlock.style.margin = "2.5px";

      newRowBlocks.appendChild(newBlock);
    }
    newPiece.appendChild(newRowBlocks);
  }

  let randomPieces = document.getElementById("random-pieces");
  randomPieces.appendChild(newPiece);
  return newPiece;
}

// Function to generate a ramdom index and return a random element
function selectRandomPiece(arr) {
  let index = Math.floor(Math.random() * arr.length);
  return index;
}

let index1 = selectRandomPiece(pieces);
let index2 = selectRandomPiece(pieces);
let index3 = selectRandomPiece(pieces);

drawPiece(index1);
drawPiece(index2);
drawPiece(index3);
