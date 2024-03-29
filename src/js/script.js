let menuItems = document.querySelectorAll('.nav-link');

menuItems.forEach(item => {
    item.addEventListener('click', scrollToIdOnClick);
})

function scrollToIdOnClick(event) {
    event.preventDefault();
    const element = event.target;
    const id = element.getAttribute('href');
    const to = document.querySelector(id).offsetTop;

    window.scroll({
        top: to - 20,
        behavior: "smooth",
    });
}

let btnUpToTop = document.getElementById("btn-up");

// Quando o usuário scrollar mais de 30px do topo da página o botão aparece

window.onscroll = function () {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
        btnUpToTop.style.display = "block";
    } else {
        btnUpToTop.style.display = "none";
    }
}

btnUpToTop.addEventListener('click', topFunction);

// Quando o usuário clicar no botão, scroll para o topo da página
function topFunction() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
}

function initAnimaScroll() {

    const sections = document.querySelectorAll('.js-scroll');
    if(sections.length) {
        const halfWindow = window.innerHeight * 0.4;
        function animaScroll() {        
            sections.forEach((section) => {
                const sectionTop = section.getBoundingClientRect().top;            
                const isSectionVisible = (sectionTop - halfWindow) < 0;
                if( isSectionVisible ) {
                    section.classList.add('ativo');
                }
            })
        }
    }
    window.addEventListener('scroll', animaScroll);
}

initAnimaScroll();

// =========================================== MENU MOBILE ===========================================

function toggleMenu() {
    let btnMobile = document.getElementById('btn-mobile');
    let navMenu = document.querySelector('.nav-menu');
    let logo = document.querySelector('.logo');
    let containerMenu = document.querySelector('.top-menu');

    function menuMobile(event) {
        if(event.type === 'touchstart') event.preventDefault(); // previne comportamento para nao executar a funcao de click e touch ao mesmo tempo
        navMenu.classList.toggle('active');
        logo.classList.toggle('active');
        containerMenu.classList.toggle('active');
        const active = containerMenu.classList.contains('active');    
        event.currentTarget.setAttribute('aria-expanded', active);
        if(active) {
            event.currentTarget.setAttribute('aria-label', 'Fechar menu');
        } else {
            event.currentTarget.setAttribute('aria-label', 'Abrir menu');
        }
    }

    btnMobile.addEventListener('click', menuMobile);
    btnMobile.addEventListener('touchstart', menuMobile);
}

toggleMenu();