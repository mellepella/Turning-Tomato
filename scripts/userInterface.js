class UserInterface {
  static displayGold() {
    const goldElem = document.getElementById("gold");

    goldElem.textContent = SaveFile.currentGold;
  }

  static renderUpgrades() {
    UPGRADES.forEach((upgrade) => new UpgradeElement(upgrade).render());
  }
}
