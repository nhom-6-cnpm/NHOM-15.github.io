// assets/js/script.js
document.addEventListener("DOMContentLoaded", function () {
  // Smooth scroll cho các liên kết
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });
});
