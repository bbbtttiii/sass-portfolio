const menuButton = document.querySelector('.menu-button');
const burger = document.querySelector('.menu-button_burger');
const nav = document.querySelector('.nav');
const menuNav = document.querySelector('.menu-nav');
const navItems = document.querySelectorAll('.menu-nav_item')

let showMenu = false;

menuButton.addEventListener('click', toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    burger.classList.add('open');
    nav.classList.add('open');
    menuNav.classList.add('open');
    navItems.forEach(i => i.classList.add('open'));

    showMenu = true;
  } else {
    burger.classList.remove('open');
    nav.classList.remove('open');
    menuNav.classList.remove('open');
    navItems.forEach(i => i.classList.remove('open'));

    showMenu = false;
  }
}