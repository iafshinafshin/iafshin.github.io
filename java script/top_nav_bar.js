// this code for position page to color bluelight

window.onscroll = function() {myFunction()};
function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("page-posi").style.width = scrolled + "%";
}

// end
//---------------------------
// this code for menu buttom

// transform menu button {
function menu_Shape_topBar(x) {
  x.classList.toggle("menu-shape");
  const element = document.getElementById("all-of_sections_web");
  const y = document.getElementById("all");
  if (element.className === "th-sec") {
  element.className = "sid-bar";
  y.className = "alll";
  } else {
    element.className = "th-sec";
    y.className = "all";
  }
}
// }
