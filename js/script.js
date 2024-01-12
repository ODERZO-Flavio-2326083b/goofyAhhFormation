let btnRemonter = document.getElementById("btnRemonter");

window.onscroll = function() {checkScroll()};

let inAnimation = false;

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
    if (menu.style.display === "block"){
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }
}