window.onload = displayClock();
function displayClock() {
	let time = new Date().toLocaleTimeString();

	document.getElementById("clock").innerText = time;
	setTimeout(displayClock, 1000); /* setting timer */
}
