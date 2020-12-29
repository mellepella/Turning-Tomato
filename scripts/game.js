class Game {
  static update() {
    this.scene();
  }

  static scene() {
    UserInterface.displayScore(score);
    Tomato.update();
  }
}

SaveFile.load();

setInterval(function () {
  Game.update();
}, 10);

setInterval(function () {
  Tomato.decreaseVelocity();
  SaveFile.save();
}, 500);
