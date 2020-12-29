class SaveFile {
  static load() {
    const serializedSave = localStorage.getItem("saveFile");

    if (serializedSave) {
      SaveFile.current = JSON.parse(serializedSave);
      return true;
    }

    SaveFile.current = {
      rotationDegrees: 10,
      turningVelocity: 0.1,
      score: 0,
    };
    return true;
  }

  static save() {
    localStorage.setItem("saveFile", JSON.stringify(SaveFile.current));
  }
}
