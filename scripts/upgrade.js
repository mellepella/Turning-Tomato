class Upgrade {
  constructor(name, description, costDef, velocityDef) {
    this.name = name;
    this.description = description;
    this.costDef = costDef;
    this.velocityDef = velocityDef;
  }

  getCost(level = this.nextLevel) {
    const { exponent, initial, slope } = this.costDef;
    return initial + slope * level ** exponent;
  }

  getVelocity(level = this.currentLevel) {
    const { exponent, initial, slope } = this.velocityDef;

    if (level === 0) {
      return 0;
    }

    return initial + slope * level ** exponent;
  }

  upgrade() {
    if (this.canUpgrade) {
      SaveFile.current.spentGold += this.getCost();
      SaveFile.current.upgrades[this.name].level += 1;
    }
  }

  get nextLevel() {
    return this.currentLevel + 1;
  }

  get currentLevel() {
    return SaveFile.current.upgrades[this.name].level || 0;
  }

  get canUpgrade() {
    return SaveFile.currentGold >= this.getCost();
  }
}
