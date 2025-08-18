document.addEventListener("DOMContentLoaded", () => {
  // ===== MENU TOGGLE =====
  const menuBtn = document.querySelector('#menu-btn');
  const navbar = document.querySelector('.header .flex .navbar');

  if (menuBtn && navbar) {
    menuBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      menuBtn.classList.toggle('fa-times');
      navbar.classList.toggle('active');
    });

    document.addEventListener('click', (e) => {
      if (!navbar.contains(e.target) && !menuBtn.contains(e.target)) {
        navbar.classList.remove('active');
        menuBtn.classList.remove('fa-times');
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
    signInForm.style.display = "block";
    signUpForm.style.display = "none";
    loginImage.style.display = "block";
    signupImage.style.display = "none";

    signUpButton.addEventListener("click", (e) => {
      e.preventDefault();
      signInForm.style.display = "none";
      signUpForm.style.display = "block";
      loginImage.style.display = "none";
      signupImage.style.display = "block";
    });

    signInButton.addEventListener("click", (e) => {
      e.preventDefault();
      signUpForm.style.display = "none";
      signInForm.style.display = "block";
      signupImage.style.display = "none";
      loginImage.style.display = "block";
    });
  }

  // ===== ALGERIAN PHONE VALIDATION =====
  function isValidAlgerianPhone(phone) {
    phone = phone.replace(/[\s()-]/g, "");
    const regex = /^(?:\+213|0)([5-7])\d{8}$/;
    return regex.test(phone);
  }

  const phoneInput = document.querySelector('input[name="phone"]');
  if (phoneInput) {
    const errorMessage = phoneInput.nextElementSibling;
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
  }

  // ===== ROLE SELECTION =====
const studentBtn = document.getElementById("studentBtn");
const teacherBtn = document.getElementById("teacherBtn");
const signupForm = document.getElementById("mainSignupForm");
let selectedRole = ""; // just use a variable

if (studentBtn) studentBtn.type = "button";
if (teacherBtn) teacherBtn.type = "button";

// Click student
studentBtn?.addEventListener("click", () => {
  selectedRole = "student";
  studentBtn.classList.add("active");
  teacherBtn.classList.remove("active");
});

// Click teacher
teacherBtn?.addEventListener("click", () => {
  selectedRole = "teacher";
  teacherBtn.classList.add("active");
  studentBtn.classList.remove("active");
});

// Submit
signupForm?.addEventListener("submit", (e) => {
  e.preventDefault();
  if (!selectedRole) {
    alert("⚠️ Please choose your role (Student or Teacher).");
    return;
  }
  if (selectedRole === "student") {
    window.location.href = "index.html";
  } else if (selectedRole === "teacher") {
    window.location.href = "TeacherLogin.html";
  }
});


 

  // ===== TEACHER SUBJECTS =====
  const subjects = {
    1: ["Anatomy", "Biophysics", "Histology"],
    2: ["Biochemistry", "Physiology", "Cytology"],
    3: ["Pathology", "Pharmacology", "Immunology"]
  };

  const checkboxes = document.querySelectorAll(".teachLevel");
  const subjectsContainer = document.getElementById("subjectsContainer");
  const subjectsList = document.getElementById("subjectsList");

  checkboxes.forEach(cb => {
    cb.addEventListener("change", () => {
      subjectsList.innerHTML = "";
      const selected = [...checkboxes].filter(c => c.checked).map(c => c.value);

      if (selected.length > 0) {
        subjectsContainer.style.display = "block";
        selected.forEach(level => {
          subjects[level].forEach(sub => {
            subjectsList.innerHTML += `
              <div class="subject-pill">
                <input type="checkbox" id="sub-${level}-${sub}" name="subjects" value="${sub}">
                <label for="sub-${level}-${sub}">${sub}</label>
              </div>
            `;
          });
        });
      } else {
        subjectsContainer.style.display = "none";
      }
    });
  });

  // ===== CONDITIONS MODAL =====
  const modal = document.getElementById("conditionsModal");
  const overlay = document.getElementById("overlay");
  const acceptBtn = document.getElementById("acceptBtn");
  const finalSubmit = document.getElementById("finalSubmit");
  const formPage = document.querySelector(".form-page");

  // Disable form initially
  finalSubmit.disabled = true;
  formPage.classList.add("disabled");
  overlay.style.display = "block";
  modal.style.display = "flex";

  acceptBtn?.addEventListener("click", () => {
    modal.style.display = "none";
    overlay.style.display = "none";
    finalSubmit.disabled = false;
    formPage.classList.remove("disabled");
  });

  // ===== TEACHER FORM SUBMIT =====
  const extraTeacherForm = document.getElementById("extraTeacherForm");
  if (extraTeacherForm) {
    extraTeacherForm.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("✅ Teacher account created successfully!");
      window.location.href = "index.html";
    });
  }

  // ===== PHOTO PREVIEW =====
const photoInput = document.getElementById("photoInput");
const photoPreview = document.getElementById("photoPreview");
const cameraIcon = document.querySelector(".photo-upload i");

if (photoInput) {
  photoInput.addEventListener("change", function(event) {
    const file = event.target.files[0];
    if (file && file.type.startsWith("image/")) {
      // Use FileReader for preview
      const reader = new FileReader();
      reader.onload = function(e) {
        photoPreview.src = e.target.result;
        photoPreview.style.display = "block";
        if (cameraIcon) cameraIcon.style.display = "none";
      };
      reader.readAsDataURL(file);

      // Sometimes on mobile, forcing a small delay helps
      setTimeout(() => {
        if (!photoPreview.src) {
          photoPreview.src = URL.createObjectURL(file);
          photoPreview.style.display = "block";
          if (cameraIcon) cameraIcon.style.display = "none";
        }
      }, 50);

    } else {
      // No valid image selected
      photoPreview.src = "";
      photoPreview.style.display = "none";
      if (cameraIcon) cameraIcon.style.display = "block";
    }
  });
}

});


