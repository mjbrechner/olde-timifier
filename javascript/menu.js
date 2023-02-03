'use strict';

let navMenu = document.getElementById("nav-menu");
let menuConverterArea = document.getElementById("converter-area");
let menuAboutArea = document.getElementById("about-area");
let menuInfoArea = document.getElementById("info-area");

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
    if (window.innerWidth >= 768) {
        // Always keep the menu visible when the screen is large.
    } else {
        navMenu.style.display = "none";
    }
}

// Menu options
function menuConverter() {
menuConverterArea.style.display = "flex";
menuInfoArea.style.display = "none";
menuAboutArea.style.display = "none";
closeMenu();
}

function menuAbout() {
menuConverterArea.style.display = "none";
menuInfoArea.style.display = "none";
menuAboutArea.style.display = "flex";
closeMenu();
}

function menuInfo() {
menuConverterArea.style.display = "none";
menuInfoArea.style.display = "flex";
menuAboutArea.style.display = "none";
closeMenu();
}