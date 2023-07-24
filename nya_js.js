/* toggle icon navbar  */
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

/*scroll section active link*/
let section = document.querrySelectorAll('section');
let navlinks = document.querrySelectorAll('header nav a');

window.onscroll = () => {
    section.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetheight;
        let id = sec.getAttribute('id');

        if(top>=offset && top < offset + height) {
            navlinks.foreach(link => {
                links.classList.remove('active');
                document.querrtSelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });
    /* sticky navbar */
    let header = document.querrySelector('header');

    header.classlist.toggle('sticky', window.scrollY > 100);

    /*remove toggle icon and navbar click navbar link*/
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

/* scroll reveal */
ScrollReveal({ 
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .service-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', {origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', {origin: 'right' });