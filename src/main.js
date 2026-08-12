const menuBtn = document.querySelector('.menu-btn');
const mobileMenu = document.querySelector('.mobile-menu');
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const mobileMenuLinks = document.querySelectorAll('.mobile-menu-link, .mobile-menu-order-btn');

function openMenu() {
  mobileMenu.classList.add('is-open');
  document.body.classList.add('no-scroll');
}

function closeMenu() {
  mobileMenu.classList.remove('is-open');
  document.body.classList.remove('no-scroll');
}

menuBtn.addEventListener('click', openMenu);
mobileMenuBtn.addEventListener('click', closeMenu);

// закриття по кліку на пункт меню
mobileMenuLinks.forEach((link) => {
  link.addEventListener('click', closeMenu);
});

// закриття по Escape
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && mobileMenu.classList.contains('is-open')) {
    closeMenu();
  }
});

// закриття по кліку поза меню (по фону .mobile-menu, якщо клікнули саме на overlay)
mobileMenu.addEventListener('click', (e) => {
  if (e.target === mobileMenu) {
    closeMenu();
  }
});