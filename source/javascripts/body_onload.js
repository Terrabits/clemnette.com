function body_onload() {
	if (window.location.hash)
		shiftWindow();
};
$('body').ready(body_onload);
