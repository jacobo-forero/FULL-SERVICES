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

(function () {
    document.addEventListener('keydown', function (e) {
    if (e.key === 'F12') {
        e.preventDefault();
        return false;
    }
    if (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'C' || e.key === 'J')) {
        e.preventDefault();
        return false;
    }
    if (e.ctrlKey && (e.key === 'u' || e.key === 'U' || e.key === 's' || e.key === 'S')) {
        e.preventDefault();
        return false;
    }

    if (e.ctrlKey && e.shiftKey && (e.key === 'K' || e.key === 'k')) {
        e.preventDefault();
        return false;
    }
    });

    document.addEventListener('contextmenu', function (e) {
    const tag = e.target.tagName.toLowerCase();
    if (tag === 'input' || tag === 'textarea' || e.target.isContentEditable) return;
    e.preventDefault();
    });

    function protectImages() {
    const imgs = document.querySelectorAll('img');
    imgs.forEach(img => {

        img.setAttribute('draggable', 'false');
        img.addEventListener('dragstart', e => e.preventDefault());

        img.addEventListener('contextmenu', e => e.preventDefault());

    if (!img.closest('.no-overlay')) { 
        const wrapper = document.createElement('div');
        wrapper.className = 'img-protect-wrapper';
        img.parentNode.insertBefore(wrapper, img);
        wrapper.appendChild(img);

        const overlay = document.createElement('div');
        overlay.className = 'img-protect-overlay';
        wrapper.appendChild(overlay);
        }
    });
    }

    if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', protectImages);
    } else {
    protectImages();
    }

    let devtoolsOpen = false;
    setInterval(() => {

    const widthThreshold = window.outerWidth - window.innerWidth > 160;
    const heightThreshold = window.outerHeight - window.innerHeight > 160;
    if (widthThreshold || heightThreshold) {
        if (!devtoolsOpen) {
        devtoolsOpen = true;
        console.warn('DevTools detected — this page attempts to block inspection.');
        }
    } else {
        devtoolsOpen = false;
    }
    }, 1000);

})();