document.addEventListener('DOMContentLoaded', () => {

    const hamburger = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('MobileMenu');
    const closeMenu = document.getElementById('closeMenu');

    // open menu
    hamburger.addEventListener('click', () => {
        mobileMenu.classList.add('active');
    });

    // close menu
    closeMenu.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
    });

    // Rocket button
    const rocketBtn = document.querySelector('.rocket-box');
    const aboutCab = document.getElementById('about-cab');

    rocketBtn.addEventListener('click', () => {
        rocketBtn.classList.toggle('active-border');

        // smooth scroll to About CAB
        aboutCab.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });

    // Fade-up AND Fade-left animations
    const faders = document.querySelectorAll('.fade-up, .fade-left');

    const appearOnScroll = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show'); 
                observer.unobserve(entry.target);  
            }
        });
    }, { threshold: 0.3 });

    faders.forEach(fader => appearOnScroll.observe(fader));

});
