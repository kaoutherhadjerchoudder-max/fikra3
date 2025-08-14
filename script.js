let menuBtn = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .flex .navbar');

menuBtn.onclick = () => {
    menuBtn.classList.toggle ('fa-times');
    navbar.classList.toggle('active');
}

var swiper = new Swiper(".course-slider", {
    spaceBetween: 20,
    grabCursor: true,
    loop: true,
    scrollbar: {
        el: ".swiper-scrollbar",
        hide: true,
        clickable: true,
      },
      breakpoints: {
        540: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        991: {
          slidesPerView: 3,
        },
        1024: {
          slidesPerView: 3,
        },
    },
    });
    