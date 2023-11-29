class Game {
  constructor() {
    this.startScreen = document.getElementById("home-screen");
    this.gameScreen = document.getElementById("game-screen");
    this.restartScreen = document.getElementById("restart-game");
    this.gameEndScreen = document.getElementById("end-screen");
    this.saveGameScreen = document.getElementById("save-screen");
    this.scoreElement = document.getElementById("actual-score");
    this.maxScoreElement = document.getElementById("max-score");
    this.score = 0;
    this.maxScore = 0;
    this.gameIsOver = false;
    this.board = new Board();
  }

  open() {
    this.startScreen.style.display = "inherit";
    this.gameScreen.style.display = "none";
    this.restartScreen.style.display = "none";
    this.gameEndScreen.style.display = "none";
    this.saveGameScreen.style.display = "none";

    setTimeout(() => {
      this.startScreen.style.display = "none";
      this.gameScreen.style.display = "inherit";
      drawBoard(this.board.boardStatus, this.board.boardElement);
      pickThree();
    }, 1000);
  }

  restartGame() {
    this.restartScreen.style.display = "inherit";

    // If the user select YES (to start a new game)
    const yesButton = document.getElementById("yes-button");
    const randomPieces = document.getElementById("random-pieces");

    yesButton.addEventListener("click", () => {
      randomPieces.innerHTML = "";
      this.board = new Board();
      this.score = 0;
      this.scoreElement.innerHTML = this.score;
      drawBoard(this.board.boardStatus, this.board.boardElement);
      pickThree();

      this.restartScreen.style.display = "none";
    });

    // If the user select NO
    const noButton = document.getElementById("no-button");
    noButton.addEventListener("click", () => {
      this.restartScreen.style.display = "none";
    });
  }

  updateScoreDropPiece(piece) {
    for (let i = 0; i < piece.length; i++) {
      for (let j = 0; j < piece[i].length; j++) {
        if (piece[i][j].color !== "none") {
          this.score++;
        }
      }
    }

    this.scoreElement.innerHTML = this.score;
  }

  updateScoreCompletedLines(completedRows, completedColumns) {
    if (completedRows.length !== 0 || completedColumns.length !== 0) {
      // If more than two lines are completed the score will increment 100. Otherwise will increment 10
      if (completedRows.length + completedColumns.length > 2) {
        this.score += 100;
      } else {
        this.score += completedRows.length * 10 + completedColumns.length * 10;
      }
    }

    this.scoreElement.innerHTML = this.score;
  }

  gameOver() {
    if (this.gameIsOver === true) {
      setTimeout(() => {
        this.gameEndScreen.querySelector("#final-score").innerText = this.score;
        this.gameEndScreen.style.display = "inherit";
        if (this.score > this.maxScore) {
          this.gameEndScreen.querySelector("#feedback").innerText = `FANTASTIC!
              NEW PERSONAL HIGHSCORE`;
        } else {
          this.gameEndScreen.querySelector("#feedback").innerText =
            "BRILLIANT!";
        }
      }, 1000);
    }
  }

  startNewGame() {
    if (this.score > this.maxScore) {
      this.maxScore = this.score;
      this.maxScoreElement.innerHTML = this.maxScore;
    }
    this.gameEndScreen.style.display = "none";

    randomPieces.innerHTML = "";
    this.board = new Board();
    this.score = 0;
    this.scoreElement.innerHTML = this.score;
    drawBoard(this.board.boardStatus, this.board.boardElement);
    pickThree();
  }

  saveGame() {
    this.saveGameScreen.style.display = "inherit";
    this.saveGameScreen.querySelector("#final-score").innerText = this.score;
  }
}
