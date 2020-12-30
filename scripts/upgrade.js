class Upgrade {
  constructor(name, description) {
    this.name = name;
    this.description = description;
  }

  getCost(level = this.currentLevel) {
    return level;
  }

  getVelocity(level = this.currentLevel) {
    return level;
  }

  upgrade() {
    if (this.canUpgrade) {
      SaveFile.current.spentGold += this.getCost();
      SaveFile.current.upgrades[this.name].level += 1;
    }
  }

  get currentLevel() {
    return SaveFile.current.upgrades[this.name].level || 0;
  }

  get canUpgrade() {
    return SaveFile.currentGold >= this.getCost();
  }
}
