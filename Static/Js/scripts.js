const sections = document.querySelectorAll('section[id]');

const highlightNav = () => {
    const scrollY = window.pageYOffset;
    
    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);
        
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLinks.forEach(link => link.classList.remove('active'));
            if (navLink) {
                navLink.classList.add('active');
            }
        }
    });
};

window.addEventListener('scroll', highlightNav);

let scrollTimeout;
const optimizedScroll = () => {
    if (scrollTimeout) {
        window.cancelAnimationFrame(scrollTimeout);
    }
    
    scrollTimeout = window.requestAnimationFrame(() => {
        revealOnScroll();
        animateStats();
        highlightNav();
    });
};

window.addEventListener('scroll', optimizedScroll);

document.addEventListener('DOMContentLoaded', () => {
    revealOnScroll();
    
    const firstNavLink = document.querySelector('.nav-link[href="#inicio"]');
    if (firstNavLink) {
        firstNavLink.classList.add('active');
    }
    
    console.log('Full Services - Landing Page cargada correctamente');
});