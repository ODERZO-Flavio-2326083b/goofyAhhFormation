
let btnRemonter = document.getElementById("btnRemonter");

window.onscroll = function() {checkScroll()};

window.onload = function() {
    menu.style.display = "none";
}

function checkScroll(){
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
        btnRemonter.style.display = "block";
    } else {
        btnRemonter.style.display = "none";
    }
}

function remonter(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

function menuShow(){
    let menu = document.getElementById("menu");
    console.log(menu.style.display)
    if(menu.style.display == "block") {
        menu.style.display = "none";
    }
      else {
        menu.style.display = "block";
    }
}