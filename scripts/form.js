const pw1 = document.querySelector("#password");
const pw2 = document.querySelector("#confirmPassword");
const message = document.querySelector("#formmessage");

pw2.addEventListener("focusout", checkSame);

function checkSame() {
	if (pw1.value !== pw2.value) {
		pw2.value = "";
		pw2.focus();
		message.textContent = "Passwords do not match. Please try again.";
	} else {
		message.textContent = "";
	}
}

const pageRating = document.getElementById('pageRating');
const ratingDisplay = document.getElementById('ratingDisplay');

pageRating.addEventListener('change', displayRatingValue);
pageRating.addEventListener('input', displayRatingValue);

function displayRatingValue() {
    ratingDisplay.innerHTML = pageRating.value;
}