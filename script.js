document.addEventListener("DOMContentLoaded", () => {

  // ===== MENU TOGGLE =====
  const menuBtn = document.querySelector('#menu-btn');
  const navbar = document.querySelector('.header .flex .navbar');

  if (menuBtn && navbar) {
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
  }

  // ===== SWIPERS =====
  if (typeof Swiper !== 'undefined') {
    new Swiper(".course-slider", {
      spaceBetween: 20,
      grabCursor: true,
      loop: true,
      pagination: { el: ".swiper-pagination", clickable: true },
      breakpoints: { 450: { slidesPerView: 1 }, 768: { slidesPerView: 3 }, 1024: { slidesPerView: 3 } }
    });

    new Swiper(".teacher-slider", {
      spaceBetween: 20,
      grabCursor: true,
      loop: true,
      pagination: { el: ".swiper-pagination", clickable: true },
      breakpoints: { 320: { slidesPerView: 2 }, 450: { slidesPerView: 2 }, 768: { slidesPerView: 5 }, 1024: { slidesPerView: 5 } }
    });
  }

  // ===== DARK/LIGHT MODE =====
  const toggleBtn = document.getElementById('theme-toggle');
  const darkImg = document.querySelector('.dark-only');
  const lightImg = document.querySelector('.light-only');
  let isDark = localStorage.getItem("theme") === "dark";

  function updateTheme() {
    if (isDark) {
      document.body.classList.add("dark-mode");
      document.body.classList.remove("light-mode");
      if (darkImg) darkImg.style.display = "block";
      if (lightImg) lightImg.style.display = "none";
      if (toggleBtn) toggleBtn.textContent = "☀️";
    } else {
      document.body.classList.add("light-mode");
      document.body.classList.remove("dark-mode");
      if (lightImg) lightImg.style.display = "block";
      if (darkImg) darkImg.style.display = "none";
      if (toggleBtn) toggleBtn.textContent = "🌙";
    }
    localStorage.setItem("theme", isDark ? "dark" : "light");
  }

  if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
      isDark = !isDark;
      updateTheme();
    });
  }

  updateTheme();

  // ===== LOGIN / SIGNUP TOGGLE =====
  const signInButton = document.getElementById("signInButton");
  const signUpButton = document.getElementById("signUpButton");
  const signInForm = document.getElementById("signInForm");
  const signUpForm = document.getElementById("signUpForm");
  const loginImage = document.getElementById("loginImage");
  const signupImage = document.getElementById("signupImage");

  if (signInButton && signUpButton && signInForm && signUpForm && loginImage && signupImage) {
    // Show login first
    signInForm.style.display = "block";
    signUpForm.style.display = "none";
    loginImage.style.display = "block";
    signupImage.style.display = "none";

    // Toggle to Sign Up
    signUpButton.addEventListener("click", (e) => {
      e.preventDefault();
      signInForm.style.display = "none";
      signUpForm.style.display = "block";
      loginImage.style.display = "none";
      signupImage.style.display = "block";
    });

    // Toggle to Sign In
    signInButton.addEventListener("click", (e) => {
      e.preventDefault();
      signUpForm.style.display = "none";
      signInForm.style.display = "block";
      signupImage.style.display = "none";
      loginImage.style.display = "block";
    });
  }

});

function isValidAlgerianPhone(phone) {
    phone = phone.replace(/[\s()-]/g, "");
    const regex = /^(?:\+213|0)([5-7])\d{8}$/;
    return regex.test(phone);
}

const phoneInput = document.querySelector('input[name="phone"]');
const errorMessage = phoneInput.nextElementSibling; // the <span> under input

phoneInput.addEventListener('blur', () => {
    if (!isValidAlgerianPhone(phoneInput.value)) {
        phoneInput.classList.add('invalid');
        errorMessage.textContent = "Invalid phone number!";
        errorMessage.style.display = 'block';
    } else {
        phoneInput.classList.remove('invalid');
        errorMessage.textContent = '';
        errorMessage.style.display = 'none';
    }
});
