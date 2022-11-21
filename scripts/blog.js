document.addEventListener("DOMContentLoaded", init);
var root = document.location.hostname

function init(){
    $("#main-frame").load(root+"blogposts/blogpost.html")
}