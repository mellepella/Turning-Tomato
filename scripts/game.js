class Game {
  static update() {
    this.scene();
  }

  static scene() {
    UserInterface.displayScore();
    UserInterface.displayGold();
    UserInterface.renderUpgrades();
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

setInterval(() => {
  const upgradeBonus = UPGRADES.reduce(
    (sum, upgrade) => sum + upgrade.getVelocity(),
    0
  );

  SaveFile.current.turningVelocity += upgradeBonus;
}, 1000);
