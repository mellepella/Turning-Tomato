const UPDATE_INTERVAL = 10;

class Game {
  static update() {
    SaveFile.current.turningVelocity =
      SaveFile.current.upgradeVelocity + SaveFile.current.clickVelocity;
    this.scene();
  }

  static pause() {
    Game.isPaused = true;
  }

  static scene() {
    UserInterface.displayGold();
    UserInterface.renderUpgrades();
    UserInterface.displaySps();
    Tomato.update();
  }
}

SaveFile.load();

setInterval(function () {
  Game.update();
}, UPDATE_INTERVAL);

setInterval(function () {
  Tomato.decreaseVelocity();
  SaveFile.save();
}, 500);

setInterval(() => {
  const upgradeBonus = UPGRADES.reduce(
    (sum, upgrade) => sum + upgrade.getVelocity(),
    0
  );

  SaveFile.current.upgradeVelocity = upgradeBonus;
}, 1000);
