let menu = document.getElementById("menu");
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
    console.log(menu.style.display);
    (menu.style.display == "none") ? menu.style.display = "block" : menu.style.display = "none"
}