//const underHeader = document.getElementById("under-header");
const menuButton = document.getElementById("menu-button");

document.addEventListener("animationend", removeUnderHeader, false);

var active = false;

function switchUnderHeader() {
    if (active) {
        active = false;
        $("#under-header").remove();
    } else {
        active = true;
        $("#under-header-frame").load("general-html/under-header.html");
    }
};

function removeUnderHeader() {
    //Activates when media queries change so underHeader doesn't stay out indefinately.
    if (active) {
        active = false;
        $("#under-header").remove();
    }
};