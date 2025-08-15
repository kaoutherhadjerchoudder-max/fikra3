let menuBtn = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .flex .navbar');

menuBtn.addEventListener('click', (e) => {
    e.stopPropagation(); // prevent triggering the document click
    menuBtn.classList.toggle('fa-times');
    navbar.classList.toggle('active');
});

document.addEventListener('click', (e) => {
    if (!navbar.contains(e.target) && !menuBtn.contains(e.target)) {
        navbar.classList.remove('active');
        menuBtn.classList.remove('fa-times'); // also reset icon
    }
});

var swiper = new Swiper(".course-slider", {
      spaceBetween: 20,
      grabCursor: true,
      loop: true,
      pagination: {
        el: ".swiper-pagination",
        clickable :true
      },
      breakpoints: {
        450: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 3,
        },
        1024: {
          slidesPerView: 3,
        },
      },
    });

    var swiper = new Swiper(".teacher-slider", {
      spaceBetween: 20,
      grabCursor: true,
      loop: true,
      pagination: {
        el: ".swiper-pagination",
        clickable :true
      },
      breakpoints: {
        320: {
          slidesPerView: 2,
        },
        450: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 5,
        },
        1024: {
          slidesPerView: 5,
        },
      },
    });

