var header = document.querySelector("header");

var window = document.querySelector(Window);
window.addEventListener("onscroll", onStick);

function onStick() {
    header.style.position = 'sticky';
    header.style.borderBottom = 'solid 1px '
    
}