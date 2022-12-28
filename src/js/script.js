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

//Slider

$(document).ready(function () {
  $('.gallery').slick({
    dots: false,
    adaptiveHeight: true,
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        }
      }, {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        }
      }

    ]
  });
})

//Scroll to TOP

// Get the button
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}