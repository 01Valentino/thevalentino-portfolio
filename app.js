const navbar = document.querySelector(".nav");
const navBtn = document.querySelector(".nav-btn");
// const fixedNav = document.querySelector(".fixed-nav");
const sidebar = document.querySelector(".sidebar");
// const showSidebarm = document.querySelector(".show-sidebar");
const navClose = document.querySelector(".nav-close");

window.addEventListener("scroll", function () {
  if (window.pageYOffset > 60) {
    navbar.classList.add("fixed-nav");
  } else {
    navbar.classList.remove("fixed-nav");
  }
});
navBtn.addEventListener("click", function () {
  sidebar.classList.add("show-sidebar");
});
navClose.addEventListener("click", function () {
  sidebar.classList.remove("show-sidebar");
});
