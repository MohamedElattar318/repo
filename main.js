function openNav() {
  document.getElementById("myNav").style.opacity = "1";
  document.getElementById("myNav").style.visibility = "visible";
  document.querySelector("body").style.overflow = "hidden";
}
function closeNav() {
  document.getElementById("myNav").style.opacity = "0";
  document.getElementById("myNav").style.visibility = "hidden";
  document.querySelector("body").style.overflow = "visible";
}
