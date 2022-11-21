document.addEventListener("DOMContentLoaded", init);
var root = document.location.hostname

function init(){
    $("#header").load(root+"header.html")
}