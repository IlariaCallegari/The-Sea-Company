const menu = document.querySelector('#hamburger-menu');
const toggleNav = document.querySelector('.toggle-nav');

menu.addEventListener('click', () => {
    toggleNav.classList.toggle('responsive');
});
