const $close = document.querySelector(".popup-close");
const $popup = document.querySelector(".popup-wrapper");
const $ham = document.querySelector(".bar");
const $menu = document.querySelector(".top-menu");

$close.addEventListener("click", () => {
  $popup.remove("on");
});
$menu.classList;
$ham.addEventListener("click", () => {
  $menu.classList.toggle("on");
});

var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
