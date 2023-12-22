document.addEventListener("DOMContentLoaded", function () {
	const circles = document.querySelectorAll(".circle");
	const prevButton = document.getElementById("prev");
	const nextButton = document.getElementById("next");
	let currentCircle = 1;

	// Initially, the previous button should be disabled
	prevButton.disabled = true;

	// Add a click event listener to the "Next" button
	nextButton.addEventListener("click", function () {
		if (currentCircle < circles.length) {
			circles[currentCircle - 1].classList.remove("active");
			currentCircle++;
			circles[currentCircle - 1].classList.add("active");

			// Enable the "Previous" button
			prevButton.disabled = false;

			// Disable the "Next" button when all circles are active
			if (currentCircle === circles.length) {
				nextButton.disabled = true;
			}
		}
	});

	// Add a click event listener to the "Previous" button
	prevButton.addEventListener("click", function () {
		if (currentCircle > 1) {
			circles[currentCircle - 1].classList.remove("active");
			currentCircle--;
			circles[currentCircle - 1].classList.add("active");

			// Enable the "Next" button
			nextButton.disabled = false;

			// Disable the "Previous" button when at the first circle
			if (currentCircle === 1) {
				prevButton.disabled = true;
			}
		}
	});
});
