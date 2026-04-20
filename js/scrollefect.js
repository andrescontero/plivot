window.addEventListener('scroll', function() {
    const nav = document.querySelector('.navbar-plivot');
    if (window.scrollY > 40) {
        nav.style.background = 'rgba(7, 9, 15, 0.97)';
        nav.style.borderBottomColor = 'rgba(74,159,212,0.2)';
    } else {
        nav.style.background = 'rgba(8, 12, 22, 0.92)';
        nav.style.borderBottomColor = 'var(--color-border)';
    }
});

// Active nav link on scroll
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(s => {
        if (window.scrollY >= s.offsetTop - 120) current = s.getAttribute('id');
    });
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + current) link.classList.add('active');
    });
});