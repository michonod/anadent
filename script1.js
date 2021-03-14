const btn = document.querySelector(".button2");
const h1 = document.querySelector("sensitive");
const imgs = document.querySelectorAll("img");
btn.addEventListener("click", function () {
  imgs.forEach((i) => {
    i.classList.toggle("show-sensitive");
  });
});
