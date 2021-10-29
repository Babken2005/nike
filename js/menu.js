const menuBlock = document.querySelector('.menuBlock');
const mobileMenu = document.querySelector('.mobileMenu');
const mobileMenuHeader = document.querySelector('.mobileMenuHeader');
const homeHeader = document.querySelector('.homeHeader');

menuBlock.addEventListener('click', () => {
  mobileMenu.classList.add('opened');
  mobileMenuHeader.classList.add('opened');
  homeHeader.classList.add('homeHeaderClosed');
})
mobileMenuHeader.addEventListener('click', () => {
  mobileMenu.classList.remove('opened');
  homeHeader.classList.remove('homeHeaderClosed');
  mobileMenuHeader.classList.remove('opened');
})