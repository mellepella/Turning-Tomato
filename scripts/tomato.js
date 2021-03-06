const tomatoImage = document.getElementById("tomato-pic");

class Tomato {
  static update() {
    this.rotate();
    this.increaseScore();
  }

  static onClick() {
    Tomato.increaseVelocity();

    const tomato = {
      clickHeight: 225,
      clickWidth: 221,
      height: 255,
      width: 250,
    };

    tomatoImage.style.width = `${tomato.clickWidth}px`;
    tomatoImage.style.height = `${tomato.clickHeight}px`;

    setTimeout(() => {
      tomatoImage.style.width = `${tomato.width}px`;
      tomatoImage.style.height = `${tomato.height}px`;
    }, 100);
  }

  static rotate() {
    SaveFile.current.rotationDegrees += SaveFile.current.turningVelocity;
    Tomato.showBlur();
    tomatoImage.style.transform = `translate(-50%, -50%) rotate(${SaveFile.current.rotationDegrees}deg)`;
  }

  static showBlur() {
    Tomato.currentIndex = Tomato.currentIndex || 0;
    const blurCount = 4;
    const velocityRoof = 50;
    const index = round(
      (SaveFile.current.turningVelocity / velocityRoof) * blurCount,
      0
    );

    if (index > Tomato.currentIndex) {
      Tomato.currentIndex = index;
      tomatoImage.src = `../assets/images/tomato-blur-${index}.png`;
    }
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
