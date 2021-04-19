const navBtn = document.getElementById('nav-btn');
const navbarMenu = document.getElementById('navbar-nav');
const dropdownMenu = document.getElementById('dropdown-menu');
const dropdownLink = document.getElementById('dropdown-link');
const dropdownLists = document.getElementById('dropdown-lists');

// top navbar animation and toggle show or hide navbar
navBtn.addEventListener('click', function (e) {
    e.target.classList.toggle('icon-toggle');
    navbarMenu.classList.toggle('navbar-show');
    [...navbarMenu.children].forEach((link, index) => {
        if (link.style.animation) {
            link.style.animation = '';
        } else {
            link.style.animation = `navMenuSlider 0.9s ease forwards ${
                index / 4.5
            }s`;
        }
    });
});
