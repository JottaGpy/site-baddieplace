/* ===========================================
MAIN
=========================================== */

document.addEventListener(

"DOMContentLoaded",

()=>{

    console.log("Baddie Place Studio");

    if(typeof initMenu==="function"){

        initMenu();

    }

    if(typeof initScroll==="function"){

        initScroll();

    }

    if(typeof initGallery==="function"){

        initGallery();

    }

    if(typeof initFAQ==="function"){

        initFAQ();

    }

});