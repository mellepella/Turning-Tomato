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
    if (SaveFile.current.turningVelocity > 0.2) {
      SaveFile.current.turningVelocity -= 0.1;
    }
  }

  static increaseVelocity() {
    SaveFile.current.turningVelocity += 0.2;
    SaveFile.save();
  }

  static increaseScore() {
    SaveFile.current.score = Math.round(SaveFile.current.rotationDegrees / 360);
  }
}
