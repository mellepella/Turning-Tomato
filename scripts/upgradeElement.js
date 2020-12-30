class UpgradeElement {
  constructor(upgrade) {
    this.upgrade = upgrade;
  }

  render() {
    const wrapper = document.getElementById("upgrades");
    const existingEl = document.getElementById(this.upgrade.name);

    if (existingEl) {
      const button = existingEl.querySelector("button");
      button.disabled = !this.upgrade.canUpgrade;
      return;
    }

    createElement("div", {
      parent: wrapper,
      id: this.upgrade.name,
      children: [
        ["h2", { innerText: this.upgrade.name }],
        ["p", { innerText: this.upgrade.description }],
        [
          "button",
          {
            type: "button",
            innerText: `Upgrade ($${this.upgrade.getCost()})`,
            onclick: (ev) => {
              ev.target.innerText = `Upgrade ($${this.upgrade.getCost()})`;
              ev.target.disabled = !this.upgrade.canUpgrade;
              this.upgrade.upgrade();
            },
          },
        ],
      ],
    });
  }
}
