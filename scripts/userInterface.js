class UserInterface {
  static displayScore() {
    const scoreElem = document.getElementById("score");

    scoreElem.textContent = SaveFile.current.score;
  }

  static displayGold() {
    const goldElem = document.getElementById("gold");

    goldElem.textContent = SaveFile.currentGold;
  }

  static renderUpgrades() {
    UPGRADES.forEach((upgrade) => new UpgradeElement(upgrade).render());
  }
}
