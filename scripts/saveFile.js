const INITIAL_SAVE = Object.freeze({
  rotationDegrees: 10,
  turningVelocity: 0.1,
  clickVelocity: 0,
  upgradeVelocity: 0,
  score: 0,
  spentGold: 0,
  upgrades: UPGRADES.reduce(
    (acc, upg) => ({ ...acc, [upg.name]: { level: 0 } }),
    {}
  ),
});

class SaveFile {
  static load() {
    const serializedSave = localStorage.getItem("saveFile");

    if (serializedSave) {
      SaveFile.current = JSON.parse(serializedSave);
      return true;
    }

    SaveFile.current = JSON.parse(JSON.stringify(INITIAL_SAVE));

    return true;
  }

  static save() {
    localStorage.setItem("saveFile", JSON.stringify(SaveFile.current));
  }

  static reset() {
    localStorage.clear();
    SaveFile.load();
    window.location.reload();
  }

  static get currentGold() {
    return SaveFile.current.score - SaveFile.current.spentGold;
  }
}
