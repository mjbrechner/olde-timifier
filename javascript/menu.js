'use strict';

let navMenu = document.getElementById("nav-menu");

// Open/close hamburger manu
function menuFunction() {
    if (navMenu.style.display === "flex") {
        navMenu.style.display = "none";
    } else {
        navMenu.style.display = "flex"
    }
};

// Close hamburger menu if window is expanded to have an always-visible navigation bar

window.addEventListener('resize', (event) => {
    if (true) {
        let e = window.innerWidth;
        if (e >= 768) {
            document.getElementById("nav-menu").style.display = "flex";
        } else {
            document.getElementById("nav-menu").style.display = "none";
        }
    }
});

// Close menu if anywhere in the main area is clicked.



document.getElementById("main-area").addEventListener("click", closeMenu);
function closeMenu() {
navMenu.style.display = "none";
}