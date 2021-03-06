
function repositionBg() {
  var body = $('body')[0];
  var bgHeight = $(window).height();
  var bgWidth = bgHeight * body.bgAspectRatio;
  var extra   = bgWidth - $(window).width();
  var pos = 0;
  if (extra > 0 && body.bgPos) {
    pos = body.bgPos;
  }
  body.style.backgroundPositionX = (-1 * pos/(body.numBgPos-1) * extra) + "px";
}
function setBgPos(x) {
  function anonymousSetBgPos() {
    var $body = $('body')
    $body[0].bgPos = x;
    $body.addClass('transition');
    repositionBg();
  }
  return anonymousSetBgPos;
}
function repositionBgNoTransition(x) {
  var $body = $('body');
  if (typeof(x) == "number") {
    $body[0].bgPos = x;
  }
  $body.removeClass();
  repositionBg();
}

$('body').ready(function() {
  var body = $('body')[0];
  body.bgAspectRatio = 1500.0/400.0;
  body.numBgPos      = $('nav:first a').length - 1;
  $('a.navbar-brand').on('click', setBgPos(0));
  $('a#home').on('click', setBgPos(0));
	$('a#link1').on('click', setBgPos(1));
	$('a#link2').on('click', setBgPos(2));
	$('a#link3').on('click', setBgPos(3));

  if (window.location.pathname) {
    var pathname = window.location.pathname;
    if (pathname == "/") {
      repositionBgNoTransition(0);
    }
    else if (pathname == "/page1") {
      repositionBgNoTransition(1);
    }
    else if (pathname == "/page2") {
      repositionBgNoTransition(2);
    }
    else if (pathname == "/page3") {
      repositionBgNoTransition(3);
    }
    else {
      repositionBgNoTransition(0);
    }
  }
  else {
    repositionBgNoTransition(0);
  }
});
$(window).on('resize', repositionBgNoTransition);
