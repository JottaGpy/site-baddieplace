/* ===========================================
   GALLERY LIGHTBOX
=========================================== */

function initGallery() {

    const images = document.querySelectorAll(".gallery img");

    if (!images.length) return;



    // Cria Lightbox

    const lightbox = document.createElement("div");

    lightbox.className = "lightbox";



    lightbox.innerHTML = `

        <span class="close-lightbox">&times;</span>

        <img class="lightbox-image">

    `;



    document.body.appendChild(lightbox);



    const lightboxImage =
        lightbox.querySelector(".lightbox-image");



    images.forEach((image) => {

        image.addEventListener("click", () => {

            lightboxImage.src = image.src;

            lightbox.classList.add("active");

        });

    });



    lightbox.addEventListener("click", (e) => {

        if (

            e.target === lightbox ||

            e.target.classList.contains("close-lightbox")

        ) {

            lightbox.classList.remove("active");

        }

    });

}