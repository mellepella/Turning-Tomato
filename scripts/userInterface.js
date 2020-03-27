class UserInterface {
	static displayScore(score) {
		const scoreElem = document.getElementById("score");

		scoreElem.textContent = score;
	}
}