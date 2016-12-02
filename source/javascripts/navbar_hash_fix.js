var shiftWindow = function() {
	scrollBy(0, -50)
};
$(window).on('hashchange', shiftWindow);
