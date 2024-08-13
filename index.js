var btn = document.getElementById("btn");
var menu = document.getElementById("menu");

/*Calling the function on btn*/
btn.onmouseover = function() {mouseOver()};
btn.onmouseout = function() {mouseOut()};

/*Function definition*/
function mouseOver() {
    menu.classList.toggle('show');
}
function mouseOut() {
    menu.classList.toggle('show');
}