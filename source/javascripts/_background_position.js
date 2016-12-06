
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
  body.style.backgroundPositionX = (-1 * pos/(body.numBgPos) * extra) + "px";
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
  body.numBgPos      = $('nav a').length - 1;
  $('a.navbar-brand').on('click', setBgPos(0));
  $('a#home').on('click', setBgPos(0));
	$('a#link1').on('click', setBgPos(1));
	$('a#link2').on('click', setBgPos(2));
	$('a#link3').on('click', setBgPos(3));

  if (window.location.hash) {
    var hash = window.location.hash;
    if (hash == "#Home") {
      repositionBgNoTransition(0);
    }
    else if (hash == "#link1") {
      repositionBgNoTransition(1);
    }
    else if (hash == "#link2") {
      repositionBgNoTransition(2);
    }
    else if (hash == "#link3") {
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
