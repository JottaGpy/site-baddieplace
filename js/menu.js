/* ===========================================
MENU MOBILE
=========================================== */

function initMenu(){

    const menuBtn = document.querySelector(".menu-mobile");
const menu = document.querySelector(".menu");

menuBtn.addEventListener("click", () => {

    menu.classList.toggle("active");

    if(menu.classList.contains("active")){

        menuBtn.innerHTML = "✕";

    }else{

        menuBtn.innerHTML = "☰";

    }

    const links = document.querySelectorAll(".menu a");

links.forEach(link => {

    link.addEventListener("click", () => {

        menu.classList.remove("active");

        menuBtn.innerHTML = "☰";

    });

});

});

}