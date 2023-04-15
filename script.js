
let switchMode = document.getElementById("switchMode");

switchMode.onclick = function() {
    let theme = document.getElementById("theme");

    if (theme.getAttribute("href") == "style.css")
       { theme.href = "darkstyle.css"; 
    } else {
        theme.href = "style.css";
    }
};

let btn = document.getElementByClassName("btn")
btn.onclick = function() {
    setTimeout(function(){
            window.location.href = 'index2.html';
          }, 2 * 1000);
}


