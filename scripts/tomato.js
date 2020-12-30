const tomatoImage = document.getElementById("tomato-pic");

class Tomato {
  static update() {
    this.rotate();
    this.increaseScore();
  }

  static rotate() {
    SaveFile.current.rotationDegrees += SaveFile.current.turningVelocity;
    tomatoImage.style.transform = `rotate(${SaveFile.current.rotationDegrees}deg)`;
  }

  static decreaseVelocity() {
    if (SaveFile.current.clickVelocity > 0.2) {
      SaveFile.current.clickVelocity -= 0.1;
    }
  }

  static increaseVelocity() {
    SaveFile.current.clickVelocity += 0.2;
  }

  static increaseScore() {
    SaveFile.current.score = Math.round(SaveFile.current.rotationDegrees / 360);
  }
}
