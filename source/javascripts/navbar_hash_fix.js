function shiftWindow() {
	scrollBy(0, -50)
};
$(window).on('hashchange', shiftWindow);
