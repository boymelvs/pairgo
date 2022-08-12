"use strict";

/* event listener for each section tag and window */
const header = document.querySelector("#my-header");
const menuItems = document.querySelectorAll(".menu-item");
const getBurger = document.querySelector("#burger-checkbox");

window.addEventListener("scroll", (e) => {
   window.scrollY > 50 ? header.classList.add("active") : header.classList.remove("active");
});

/* ================= HAMBURGER ================= */
/* when menu item click close dropdown menu */
menuItems.forEach((item) => {
   item.addEventListener("click", () => {
      getBurger.checked = false;
   });
});

/* looping and run slides */
const slides = document.querySelectorAll(".slide");
let currentSlide = 0;

const runSlide = () => {
   if (currentSlide == 3) {
      currentSlide = 0;
   }

   slides.forEach((slide, index) => {
      slide.style.transform = `translateX(${(index - currentSlide) * 100}%)`;
   });

   currentSlide++;
};

// let timer = setInterval(() => {
//    runSlide();
// }, 5000);
