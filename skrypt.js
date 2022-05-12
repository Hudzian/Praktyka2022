function data() {
	let d = new Date();
	document.body.innerHTML =
		'<h1>Ta strona została odwiedzona <br> ' + d + '</h1>';
}
setInterval(data, 1000);
