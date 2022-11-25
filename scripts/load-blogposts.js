document.addEventListener("DOMContentLoaded", init);


function init() {
    const mainFrame = document.getElementById("main-frame");
    const titlesString = loadTitlesString();
    const titles = parseTitlesString(titlesString);
    let fragment = document.createDocumentFragment();
    for (let i=titles.length-1; i>=0; i--) {
        let p = document.createElement("p");
        p.innerHTML = "<b> Post " + (i+1) + ": &nbsp ";
        p.className = "tag"
        let a = document.createElement("a");
        a.innerHTML =  " " + titles[i] + "<br>";
        let splitTitle = titles[i].split(":");
        let date = splitTitle[0];
        a.href = "/blog/" + date
        fragment.appendChild(p);
        fragment.appendChild(a);
    }
    mainFrame.appendChild(fragment);
}

function loadTitlesString() {
    var result = null;
    var xmlHttpRequest = new XMLHttpRequest();
    xmlHttpRequest.open("GET", "/blog/titles.txt", false);
    xmlHttpRequest.send();
    if (xmlHttpRequest.status==200) {
      result = xmlHttpRequest.responseText;
    }
    return result;
}

function parseTitlesString(string) {
    let titles = [];
    let splitString = string.split("\n");
    splitString.forEach(line => {
        titles.push(line);
    });
    return titles;
}