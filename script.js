function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

function scrollToCenter(number) {
    var sections = document.querySelectorAll('section');
    var section = sections[number];
    var elementRect = section.getBoundingClientRect();
    var ontop = elementRect.top + window.scrollY - (2 * parseFloat(getComputedStyle(document.documentElement).fontSize));
    var navbar = document.getElementById("navbar");
    var navbarul = navbar.querySelector('ul');
    navbarul.style.padding = "1em";
    navbar.style.opacity = "0.6"
    navbarul.style.opacity = "0.85"
    navbar.style.position = "fixed";
    window.scrollTo({
        top: ontop,
        behavior: 'smooth'
    });
}
