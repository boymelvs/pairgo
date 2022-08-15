"use strict";

/* event listener for each section tag and window */
const header = document.querySelector("#my-header");
const menuItems = document.querySelectorAll(".menu-item");
const getBurger = document.querySelector("#burger-checkbox");
const sections = document.querySelectorAll("section");

window.addEventListener("scroll", (e) => {
   window.scrollY > 50 ? header.classList.add("active") : header.classList.remove("active");

   sections.forEach((section) => {
      activeLink(section);
   });
});

/* ================= HAMBURGER ================= */
/* when menu item click close dropdown menu */
menuItems.forEach((item) => {
   item.addEventListener("click", () => {
      getBurger.checked = false;
   });
});

/* ================= SLIDERS ================= */
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

let timer = setInterval(() => {
   runSlide();
}, 5000);

/* ================= MENU ITEM ================= */
/* function that add/remove active class in menu items */
const addRemoveClasses = (value, id) => {
   value.classList.contains(`${id}`) ? value.classList.add("active") : value.classList.remove("active");
};

/* function that find the location of each section tag */
const activeLink = (value) => {
   const findTop = value.offsetTop;
   const findHeight = value.clientHeight;
   const getId = value.getAttribute("id");

   if (window.scrollY == 0 && getId == "home") {
      /* loop for header menu items */
      menuItems.forEach((item) => {
         addRemoveClasses(item, getId);
      });
   }

   if (window.scrollY >= findTop - findHeight / 4) {
      /* loop for header menu items */
      menuItems.forEach((item) => {
         addRemoveClasses(item, getId);
      });
   }
};
