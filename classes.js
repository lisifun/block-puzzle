class Piece {
  constructor(pieces) {
    this.pieces = pieces;
    this.randomPieces = document.getElementById("random-pieces");
    this.selectedPiece;
  }

  ramdomIndex() {
    let index = Math.floor(Math.random() * this.pieces.length);
    return index;
  }

  drawPiece() {
    let randomIndex = this.ramdomIndex();
    let piece = this.pieces[randomIndex];

    // To create a new div element
    let newPiece = document.createElement("div");
    newPiece.id = randomIndex;
    newPiece.className = "new-piece";

    // With this attribute and this events we can drag and drop the piece to the board
    newPiece.setAttribute("draggable", "true");
    newPiece.addEventListener("dragstart", this.drag);
    newPiece.addEventListener("dragend", this.drop);

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

    this.randomPieces.appendChild(newPiece);
    return newPiece;
  }

  pickTree() {
    this.drawPiece();
    this.drawPiece();
    this.drawPiece();
  }
}

// // To drag the piece
// function drag(e) {
//   selectedPiece = e.target;

//   e.dataTransfer.setData("text", e.target.id);
//   selectedPiece.style.transition = "opacity 1000s";
//   selectedPiece.style.opacity = 0;
// }

// // To drop the piece
// async function drop(e) {
//   if (isFitting) {
//     let newChanges = updateBoardWithPiece(
//       pieces[Number(selectedPiece.id)],
//       boardStatus,
//       selectedIndex
//     );
//     drawBoard(checkCompletedLines(newChanges));

//     updateScore(pieces[Number(selectedPiece.id)]);

//     randomPieces.removeChild(selectedPiece);
//     if (randomPieces.childNodes.length === 0) {
//       pickThree();
//     }
//   }

//   // To check if the game is Over
//   let result = [];
//   for (let i = 0; i < randomPieces.childNodes.length; i++) {
//     let piece = pieces[Number(randomPieces.childNodes[i].id)];
//     result.push(isGameOver(piece, boardStatus));
//   }
//   await new Promise((r) => setTimeout(r, 500));

//   if (!result.includes(true)) {
//     alert(`GAME OVER! NO SPACE LEFT`);
//   }
//   console.log("drag end");
// }
