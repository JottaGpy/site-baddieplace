/* ===========================================
   FAQ
=========================================== */

function initFAQ(){

    const items =
    document.querySelectorAll("#faq details");

    items.forEach(item=>{

        item.addEventListener("toggle",()=>{

            if(item.open){

                items.forEach(other=>{

                    if(other!==item){

                        other.removeAttribute("open");

                    }

                });

            }

        });

    });

}