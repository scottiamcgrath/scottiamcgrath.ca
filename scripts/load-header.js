document.addEventListener("DOMContentLoaded", init);
var root = document.location.hostname

function init(){
    console.log(root)
    $("#header").load("general-html/header.html")
}