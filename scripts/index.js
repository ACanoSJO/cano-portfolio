var btnUp = document.getElementById("arrow-up");
btnUp.onclick = function scrollDown() {
	window.scroll(0, window.scrollY - 1000);
}

var btnDown = document.getElementById("arrow-down");
btnDown.onclick = function scrollDown() {
	window.scroll(0, window.scrollY + 1000);
}