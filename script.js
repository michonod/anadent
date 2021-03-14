const burger = document.querySelector(".burger");
const nav = document.querySelector("nav");
const navlinks = document.querySelector(".navbar-middle-nav");

burger.addEventListener("click", function () {
  nav.classList.toggle("toggler");
  navlinks.classList.toggle("toggler");
});
