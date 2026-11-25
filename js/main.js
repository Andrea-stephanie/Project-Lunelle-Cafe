/* =========================================================
   LUNELLE CAFÉ - MAIN UI & NAVIGATION SCRIPT (js/main.js)
   ========================================================= */

document.addEventListener("DOMContentLoaded", function () {
  // 1. Subtle Fade-In Animation on Scroll
  const fadeElements = document.querySelectorAll(".fade-in-up");

  const revealOnScroll = () => {
    const windowHeight = window.innerHeight;
    fadeElements.forEach((el) => {
      const elementTop = el.getBoundingClientRect().top;
      if (elementTop < windowHeight - 40) {
        el.classList.add("visible");
      }
    });
  };

  revealOnScroll();
  window.addEventListener("scroll", revealOnScroll);

  // 2. Back to Top Button Behavior
  const backToTopBtn = document.getElementById("backToTopBtn");
  if (backToTopBtn) {
    window.addEventListener("scroll", function () {
      if (window.scrollY > 300) {
        backToTopBtn.style.display = "flex";
      } else {
        backToTopBtn.style.display = "none";
      }
    });

    backToTopBtn.addEventListener("click", function () {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });
  }

  // 3. Auto-close mobile navbar when a nav link is clicked
  const navLinks = document.querySelectorAll(".navbar-collapse .nav-link");
  const navbarCollapse = document.getElementById("lunelleNavbar");
  if (navLinks && navbarCollapse) {
    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        if (navbarCollapse.classList.contains("show")) {
          const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);
          if (bsCollapse) bsCollapse.hide();
        }
      });
    });
  }
});