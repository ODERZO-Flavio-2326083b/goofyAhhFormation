let btnRemonter = document.getElementById("btnRemonter");

window.onscroll = function() {checkScroll()};

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