let rotationDegrees = 10;
let turningVelocity = 0.1;
let score = 0;

class Game {
	static update() {
		this.scene();
	}
	static scene() {
		UserInterface.displayScore(score);
		Tomato.update();
	}
}

setInterval(function(){ 
	Game.update(); 
}, 10);

setInterval(function(){
	Tomato.decreaseVelocity(); 
}, 500);
