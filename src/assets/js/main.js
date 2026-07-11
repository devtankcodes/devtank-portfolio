/* ==========================================================
   Dev Tank Portfolio
   main.js
   ========================================================== */

"use strict";

/* ==========================================================
   SELECTORS
========================================================== */

const header = document.getElementById("header");
const nav = document.getElementById("nav");
const navToggle = document.getElementById("navToggle");
const navLinks = document.querySelectorAll(".nav__link");
const backToTop = document.querySelector(".back-to-top");
const currentYear = document.getElementById("current-year");

/* ==========================================================
   MOBILE MENU
========================================================== */

if (navToggle && nav) {
    navToggle.addEventListener("click", () => {

        nav.classList.toggle("active");

        const expanded =
            navToggle.getAttribute("aria-expanded") === "true";

        navToggle.setAttribute(
            "aria-expanded",
            !expanded
        );

        document.body.classList.toggle("menu-open");

    });
}

/* Close menu after clicking link */

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        nav.classList.remove("active");

        navToggle.setAttribute("aria-expanded", "false");

        document.body.classList.remove("menu-open");

    });

});

/* ==========================================================
   HEADER SHADOW ON SCROLL
========================================================== */

function handleHeader() {

    if (window.scrollY > 50) {

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");

    }

}

window.addEventListener("scroll", handleHeader);
handleHeader();

/* ==========================================================
   ACTIVE NAVIGATION
========================================================== */

const sections = document.querySelectorAll("section[id]");

function activateNav() {

    const scrollY = window.pageYOffset;

    sections.forEach(section => {

        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 120;
        const sectionId = section.getAttribute("id");

        const navLink = document.querySelector(
            `.nav__link[href="#${sectionId}"]`
        );

        if (!navLink) return;

        if (
            scrollY >= sectionTop &&
            scrollY < sectionTop + sectionHeight
        ) {

            navLinks.forEach(link =>
                link.classList.remove("active")
            );

            navLink.classList.add("active");

        }

    });

}

window.addEventListener("scroll", activateNav);
activateNav();

/* ==========================================================
   BACK TO TOP BUTTON
========================================================== */

function toggleBackToTop() {

    if (window.scrollY > 500) {

        backToTop.style.opacity = "1";
        backToTop.style.visibility = "visible";

    } else {

        backToTop.style.opacity = "0";
        backToTop.style.visibility = "hidden";

    }

}

window.addEventListener("scroll", toggleBackToTop);
toggleBackToTop();

/* ==========================================================
   CURRENT YEAR
========================================================== */

if (currentYear) {

    currentYear.textContent = new Date().getFullYear();

}

/* ==========================================================
   SMOOTH SCROLL
========================================================== */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        const target = document.querySelector(
            this.getAttribute("href")
        );

        if (!target) return;

        e.preventDefault();

        target.scrollIntoView({

            behavior: "smooth"

        });

    });

});

/* ==========================================================
   SCROLL REVEAL
========================================================== */

const revealElements = document.querySelectorAll(
    ".about-card, .skill-card, .project-card, .education-card, .contact-card"
);

const observer = new IntersectionObserver(

    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";

                observer.unobserve(entry.target);

            }

        });

    },

    {
        threshold: 0.15
    }

);

revealElements.forEach(element => {

    element.style.opacity = "0";
    element.style.transform = "translateY(40px)";
    element.style.transition = "all .6s ease";

    observer.observe(element);

});

/* ==========================================================
   IMAGE PARALLAX
========================================================== */

const heroImage = document.querySelector(".hero__profile-image");

window.addEventListener("scroll", () => {

    if (!heroImage) return;

    const offset = window.scrollY * 0.08;

    heroImage.style.transform = `translateY(${offset}px)`;

});

/* ==========================================================
   PRELOADER (Optional)
========================================================== */

window.addEventListener("load", () => {

    document.body.classList.add("loaded");

});

/* ==========================================================
   KEYBOARD ACCESSIBILITY
========================================================== */

document.addEventListener("keyup", (event) => {

    if (event.key === "Escape") {

        nav.classList.remove("active");

        navToggle.setAttribute(
            "aria-expanded",
            "false"
        );

    }

});

/* ==========================================================
   END
========================================================== */