let btnRemonter = document.getElementById("btnRemonter");

let baseSheet = document.getElementById('stylesheet').getAttribute('href');

window.onscroll = function() {
    checkScroll();
};

function checkScroll() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        btnRemonter.style.display = "block";
    } else {
        btnRemonter.style.display = "none";
    }
}

function remonter() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

let inAnimation = false;

function openPopup() {
    let paymentPopup = document.getElementById('paymentPopup');
    let isOpen = paymentPopup.style.display === 'block';
    if (inAnimation) {
        return;
    }

    inAnimation = true;

    if (isOpen) {
        animateClose(paymentPopup);
    } else {
        animateOpen(paymentPopup);
    }
}

function animateOpen(element) {
    element.style.display = 'block';
    let height = 0;

    function frame() {
        height += 0.8;
        element.style.transform = `translateY(${100 - height}%)`;

        if (height < 100) {
            requestAnimationFrame(frame);
        } else {
            inAnimation = false;
        }
    }

    frame();
}

function animateClose(element) {
    let height = 0;

    function frame() {
        height += 0.8;
        element.style.transform = `translateY(${height}%)`;
        if (height < 100) {
            requestAnimationFrame(frame);
        } else {
            inAnimation = false;
            element.style.display = 'none';
        }
    }
    frame();
}
function menuShow(){
    let menu = document.getElementById("menu");
    if (menu.style.display === "block"){
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }
}

function changesheet(newSheet) {
    if(document.getElementById('stylesheet').getAttribute('href') === baseSheet){
        document.getElementById('stylesheet').setAttribute('href', newSheet);
    } else {
        document.getElementById('stylesheet').setAttribute('href', baseSheet);
    }
}