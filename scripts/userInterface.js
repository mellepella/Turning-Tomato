class UserInterface {
  static displayGold() {
    const goldElem = document.getElementById("gold");

    goldElem.textContent = SaveFile.currentGold;
  }

  static displaySps() {
    const heading = document.getElementById("spins-per-second");

    heading.textContent = `Spins/second: ${calculateSps()}`;
  }

  static renderUpgrades() {
    UPGRADES.forEach((upgrade) => new UpgradeElement(upgrade).render());
  }
}
