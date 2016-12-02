
function repositionBg() {
  body = $('body')[0];
  bgHeight = $(window).height();
  bgWidth = bgHeight * body.bgAspectRatio;
  extra   = bgWidth - $(window).width();
  if (body.bgPos) {
    pos = body.bgPos;
  }
  else {
    pos = 0;
  }
  body.style.backgroundPositionX = (-1 * pos/body.numBgPos * extra) + "px";
}
function setBgPos(x) {
  function anonymousSetBgPos() {
    $('body')[0].bgPos = x;
    repositionBg();
    // $('body')[0].className = "background-pos-" + x;
  }
  return anonymousSetBgPos;
}
function repositionBgNoTransition() {
  body = $('body')[0];
  body.className = "";
  repositionBg();
  body.className = "transition";
}

$('body').ready(function() {
  body = $('body')[0];
  body.bgAspectRatio = 1500.0/400.0;
  body.numBgPos      = 3;
  $('a.navbar-brand').on('click', setBgPos(0));
  $('a#home').on('click', setBgPos(0));
	$('a#theme').on('click', setBgPos(1));
	$('a#type').on('click', setBgPos(2));
	$('a#background-pos-4').on('click', setBgPos(3));
});
$(window).on('resize', repositionBgNoTransition);
