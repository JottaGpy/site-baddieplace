/* ===========================================
MENU MOBILE
=========================================== */

function initMenu(){

    const button =
    document.querySelector(".menu-mobile");

    const menu =
    document.querySelector(".menu");

    if(!button || !menu){

        return;

    }

    button.addEventListener("click",()=>{

        menu.classList.toggle("active");

    });


    menu.querySelectorAll("a").forEach(link=>{

        link.addEventListener("click",()=>{

            menu.classList.remove("active");

        });

    });

}