let slider = $(document).ready(function () {
  $('.gallery__slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    dots: true,
    infinite: true
  });
});

//burger menu
'use strict';
const humb = document.querySelector('#burger');
const humbBody = document.querySelector('#burger-menu');
const header = document.querySelector('.header');
const menuOpen = document.querySelector('html');


humb.addEventListener('click', humbHandler);

function humbHandler(e) {
  e.preventDefault();
  humbBody.classList.toggle("open");
  menuOpen.classList.toggle("menu__open");
  humb.classList.toggle('active');
  header.classList.toggle('active');
  window.scrollTo(0, 0);
}
