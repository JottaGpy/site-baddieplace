/* ===========================================
   MENU MOBILE & SCROLL CUSTOMIZADO
=========================================== */

function initMenu(){

    const menuBtn = document.querySelector(".menu-mobile");
    const menu = document.querySelector(".menu");

    // 1. Controla o botão de abrir/fechar o menu mobile
    menuBtn.addEventListener("click", () => {
        menu.classList.toggle("active");
        if(menu.classList.contains("active")){
            menuBtn.innerHTML = "✕";
        }else{
            menuBtn.innerHTML = "☰";
        }
    });

    // 2. Seleciona todos os links do site (menu e botões)
    const links = document.querySelectorAll(".menu a, .btn-header, .btn-primary, .btn-secondary");

    links.forEach(link => {
        link.addEventListener("click", function(e) {
            
            // Pega o ID da seção de destino (ex: #sobre)
            const targetId = this.getAttribute("href");
            
            // Se não for um link interno (âncora), deixa o link funcionar normalmente
            if (!targetId || !targetId.startsWith("#") || targetId === "#") return;

            // Previne o pulo imediato padrão do navegador
            e.preventDefault();

            // Fecha o menu mobile ao clicar
            menu.classList.remove("active");
            menuBtn.innerHTML = "☰";

            const targetSection = document.querySelector(targetId);
            if (!targetSection) return;

            // Calcula a distância descontando a altura do header fixo (80px)
            const headerOffset = 80;
            const elementPosition = targetSection.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            // ==========================================
            // CONFIGURAÇÃO DO TEMPO AQUI:
            // 1500 = 1.5 segundos. Aumente ou diminua como preferir!
            const duration = 1500; 
            // ==========================================
            
            const startPosition = window.pageYOffset;
            const distance = offsetPosition - startPosition;
            let startTime = null;

            // Função que cria o movimento fluido frame por frame
            function animation(currentTime) {
                if (startTime === null) startTime = currentTime;
                const timeElapsed = currentTime - startTime;
                
                // Matemática para um deslize elegante (Ease In Out)
                const run = ease(timeElapsed, startPosition, distance, duration);
                window.scrollTo(0, run);
                
                if (timeElapsed < duration) requestAnimationFrame(animation);
            }

            // Função matemática de suavização
            function ease(t, b, c, d) {
                t /= d / 2;
                if (t < 1) return c / 2 * t * t * t + b;
                t -= 2;
                return c / 2 * (t * t * t + 2) + b;
            }

            requestAnimationFrame(animation);
        });
    });
}