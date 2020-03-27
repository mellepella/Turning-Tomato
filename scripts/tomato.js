const tomatoImage = document.getElementById("tomato-pic");

class Tomato {
	static update() {
		this.rotate();
		this.increaseScore();
	}
	static rotate() {
		rotationDegrees += turningVelocity;
		tomatoImage.style.transform = `rotate(${rotationDegrees}deg)`;
	}
	static decreaseVelocity() {
		if(turningVelocity > 0.2) {
			turningVelocity -= 0.1;
		}
	}
	static increaseVelocity() {
		turningVelocity += 0.2;
	}
	static increaseScore() {
		score = Math.round(rotationDegrees/360);
		console.log(rotationDegrees);
	}
}

