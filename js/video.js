window.addEventListener("load", function () {
	const video = document.querySelector("#player1");
	console.log("Video element found:", video);

	const playButton = document.querySelector("#play");
	console.log("Play button found:", playButton);

	const pauseButton = document.querySelector("#pause");
	console.log("Pause button found:", pauseButton);

	const slowerButton = document.querySelector("#slower");
	console.log("Slower button found:", slowerButton);

	const fasterButton = document.querySelector("#faster");
	console.log("Faster button found:", fasterButton);

	const skipButton = document.querySelector("#skip");
	console.log("Skip button found:", skipButton);

	const muteButton = document.querySelector("#mute");
	console.log("Mute button found:", muteButton);

	const volumeSlider = document.querySelector("#slider");
	console.log("Volume slider found:", volumeSlider);

	const volumeDisplay = document.querySelector("#volume");
	console.log("Volume display found:", volumeDisplay);

	const vintageButton = document.querySelector("#vintage");
	console.log("Vintage button found:", vintageButton);

	const origButton = document.querySelector("#orig");
	console.log("Original button found:", origButton);

	// Initialize video settings
	video.autoplay = false;
	video.loop = false;
	video.volume = volumeSlider.value / 100;  // Set initial volume based on slider
	volumeDisplay.textContent = volumeSlider.value + "%";  // Display initial volume
	console.log("Video initialized with autoplay:", video.autoplay, "loop:", video.loop);

	// Play button functionality
	playButton.onclick = function () {
		console.log("Play button clicked");
		video.play();
		// Update volume display before playing
		volumeDisplay.textContent = Math.round(volumeSlider.value) + "%";
		console.log("Video playing at volume:", video.volume);
	};

	// Pause button functionality
	pauseButton.onclick = function () {
		console.log("Pause button clicked");
		video.pause();
		console.log("Video paused");
	};

	// Slow down functionality
	slowerButton.onclick = function () {
		console.log("Slow down button clicked");
		video.playbackRate *= 0.9;
		console.log("New speed:", video.playbackRate.toFixed(5));
	};

	// Speed up functionality
	fasterButton.onclick = function () {
		console.log("Speed up button clicked");
		video.playbackRate /= 0.9;
		console.log("New speed:", video.playbackRate.toFixed(5));
	};

	// Skip ahead functionality
	skipButton.onclick = function () {
		console.log("Skip button clicked");
		if (video.currentTime + 10 <= video.duration) {
			video.currentTime += 10;
		} else {
			video.currentTime = 0;
		}
		console.log("Current location:", video.currentTime.toFixed(2));
	};

	// Mute functionality
	muteButton.onclick = function () {
		console.log("Mute button clicked");
		if (video.muted) {
			video.muted = false;
			muteButton.textContent = "Mute";
			console.log("Video unmuted");
		} else {
			video.muted = true;
			muteButton.textContent = "Unmute";
			console.log("Video muted");
		}
	};

	// Volume slider functionality
	volumeSlider.oninput = function () {
		console.log("Volume slider adjusted");
		video.volume = this.value / 100;
		volumeDisplay.textContent = this.value + "%";
		console.log("New volume:", video.volume.toFixed(2));
	};

	// Video styling functionality
	vintageButton.onclick = function () {
		console.log("Vintage button clicked");
		video.classList.add("oldSchool");
		console.log("Old school class added");
	};

	origButton.onclick = function () {
		console.log("Original button clicked");
		video.classList.remove("oldSchool");
		console.log("Old school class removed");
	};
});