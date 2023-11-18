// VARIABLES
// Background color for light mode
const lightColorMode = "#fbf5f7"; // For dark mode => "#0E1420"

// Base color for light mode
const baseColorBoard = "#EBE9EB"; // For dark mode => '#232C3B

// Board Matrix
let boardMatrix = [
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
    { color: "purple" },
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
    [{ color: "#59C980" }, { color: lightColorMode }],
    [{ color: "#59C980" }, { color: "#59C980" }],
  ], // index => 11 piece => short L (left bottom corner)
  [
    [{ color: lightColorMode }, { color: "#59C980" }],
    [{ color: "#59C980" }, { color: "#59C980" }],
  ], // index => 12 piece => short L (right bottom corner)
  [
    [{ color: "#59C980" }, { color: "#59C980" }],
    [{ color: "#59C980" }, { color: lightColorMode }],
  ], // index => 13 piece => short L (left top corner)
  [
    [{ color: "#59C980" }, { color: "#59C980" }],
    [{ color: lightColorMode }, { color: "#59C980" }],
  ], // index => 14 piece => short L (right top corner)
  [
    [
      { color: "#5CB9E4" },
      { color: lightColorMode },
      { color: lightColorMode },
    ],
    [
      { color: "#5CB9E4" },
      { color: lightColorMode },
      { color: lightColorMode },
    ],
    [{ color: "#5CB9E4" }, { color: "#5CB9E4" }, { color: "#5CB9E4" }],
  ], // index => 15 piece => large L (left bottom corner)
  [
    [
      { color: lightColorMode },
      { color: lightColorMode },
      { color: "#5CB9E4" },
    ],
    [
      { color: lightColorMode },
      { color: lightColorMode },
      { color: "#5CB9E4" },
    ],
    [{ color: "#5CB9E4" }, { color: "#5CB9E4" }, { color: "#5CB9E4" }],
  ], // index => 16 piece => large L (right bottom corner)
  [
    [{ color: "#5CB9E4" }, { color: "#5CB9E4" }, { color: "#5CB9E4" }],
    [
      { color: "#5CB9E4" },
      { color: lightColorMode },
      { color: lightColorMode },
    ],
    [
      { color: "#5CB9E4" },
      { color: lightColorMode },
      { color: lightColorMode },
    ],
  ], // index => 17 piece => large L (left top corner)
  [
    [{ color: "#5CB9E4" }, { color: "#5CB9E4" }, { color: "#5CB9E4" }],
    [
      { color: lightColorMode },
      { color: lightColorMode },
      { color: "#5CB9E4" },
    ],
    [
      { color: lightColorMode },
      { color: lightColorMode },
      { color: "#5CB9E4" },
    ],
  ], // index => 18 piece => large L (right top corner)
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

drawBoard(boardMatrix);
drawBoard(checkCompletedLines(boardMatrix));

//Function to draw a piece
function drawPiece(matrix) {
  // To create a new div element
  let newPiece = document.createElement("div");
  newPiece.className = "new-piece";

  // With this attribute we can dragg the piece to the board
  newPiece.setAttribute("draggable", "true");

  for (let i = 0; i < matrix.length; i++) {
    let newRowBlocks = document.createElement("div");
    newRowBlocks.className = "new-row-blocks";
    for (let j = 0; j < matrix[i].length; j++) {
      let newBlock = document.createElement("div");
      newBlock.className = "new-block";

      newBlock.style.borderRadius = "5px";
      newBlock.style.width = "40px";
      newBlock.style.height = "40px";
      newBlock.style.backgroundColor = matrix[i][j].color;
      newBlock.style.margin = "2.5px";

      newRowBlocks.appendChild(newBlock);
    }
    newPiece.appendChild(newRowBlocks);
  }

  let piece = document.getElementById("pieces");
  piece.appendChild(newPiece);
  return newPiece;
}

// Function to generate a ramdom index and return a random element
function selectRandomPiece(arr) {
  let index = Math.floor(Math.random() * arr.length);
  return arr[index];
}

let piece1 = selectRandomPiece(pieces);
let piece2 = selectRandomPiece(pieces);
let piece3 = selectRandomPiece(pieces);

drawPiece(piece1);
drawPiece(piece2);
drawPiece(piece3);
