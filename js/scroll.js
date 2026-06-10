/* ===========================================
   SCROLL ANIMATIONS
=========================================== */

function initScroll() {

    const header = document.querySelector(".header");

    const animatedElements = document.querySelectorAll(
        ".hero, .section-title, .services article, .gallery .item, .about, .steps div, .cards article, details, .cta"
    );



    function reveal() {

        const trigger = window.innerHeight * 0.85;



        animatedElements.forEach((element) => {

            const top = element.getBoundingClientRect().top;

            if (top < trigger) {

                element.classList.add("show");

            }

        });



        if (window.scrollY > 50) {

            header.classList.add("scroll");

        } else {

            header.classList.remove("scroll");

        }

    }



    reveal();

    window.addEventListener("scroll", reveal);

}