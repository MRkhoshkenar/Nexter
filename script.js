"use strict";

const nav = document.querySelector(".navigation__nav");
const navLink = document.querySelector(".navigation__nav__link");
const navBtn = document.querySelector(".navigation__btn");
const allLinks = document.querySelectorAll(".navigation__nav__link");

navBtn.addEventListener("click", function () {
  navBtn.classList.toggle("navigation__btn--open");
  navBtn.classList.toggle("navigation__btn--close");
  nav.classList.toggle("navigation__open");
});

allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");
    nav.classList.remove("navigation__open");
    navBtn.classList.toggle("navigation__btn--open");
    navBtn.classList.toggle("navigation__btn--close");

    // Scroll back to top
    if (href === "#")
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

    // Scroll to other links
    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }

    // Close mobile navigation
    if (link.classList.contains("navigation__nav__link"))
      nav.classList.toggle("nav__open");
  });
});
