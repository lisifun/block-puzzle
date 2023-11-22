class Game {
  constructor() {
    this.startHomeScreen = document.getElementById("home-screen");
    this.gameScreen = document.getElementById("game-screen");
    this.gameEndScreen = document.getElementById("end-screen");
    this.scoreElement = document.getElementById("actual-score");
    this.maxScoreElement = document.getElementById("max-score");
    this.score = 0;
    this.maxScore = 0;
    this.boardStatus;
    this.gameIsOver = false;
  }

  start() {
    this.gameEndScreen.style.display = "none";
    this.startScreen.style.display = "none";
    this.gameScreen.style.display = "inherit";
  }

  update() {
    this.scoreElement.innerHTML = this.score;
  }

  gameOver() {
    if (this.gameIsOver === true) {
      this.gameScreen.style.display = "none";
      this.gameEndScreen.style.display = "inherit";
    }
  }
}
