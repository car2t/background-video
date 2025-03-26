const pauseButton = document.getElementById('playPause');
// console.log({ pauseButton });

pauseButton.addEventListener('click', pauseAndPlay, false);

function pauseAndPlay() {
	// console.log(this);

	const media = document.getElementById(
		this.getAttribute('aria-controls')
	);
	// console.log({ media });

	if (media.paused) {
		media.play();
		this.innerText = this.dataset.pauseText;
	} else {
		media.pause();
		this.innerText = this.dataset.playText;
	}
	document
		.querySelector('[aria-controls]')
		.removeAttribute('controls');
}
