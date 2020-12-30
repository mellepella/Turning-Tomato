class ItalianChef extends Upgrade {
  constructor() {
    super("Italian Chef", "Italian chef helps you spin your tomato.");
  }

  getCost(level = this.currentLevel) {
    return Math.round(10 + level ** 2 / 10);
  }

  getVelocity(level = this.currentLevel) {
    return level ** 2 / 1000;
  }
}
