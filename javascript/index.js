'use strict';

let inputtedText;
let originalText;
let newText;
let convertThorn = true;
let convertLongS = true;
const isUpperCase = str => str === str.toUpperCase();

// This function resets the animation of the text color.
function resetTextColor() {
    document.getElementById("text-input").style.animationName = "";
}

// This function briefly animates the text color as a helpful visual cue for when something is supposed to happen.
function animateTextColor() {
    document.getElementById("text-input").style.animationName = "text-color-animation";
    document.getElementById("text-input").style.animationDuration = "1s";
}

// This function handles the character conversion to the "Olde Tyme" style.
function convertTextOlde() {
    inputtedText = document.getElementById("text-input").value;
    originalText = inputtedText;
    newText = inputtedText;

    // Here is where the conversion happens, divided into separate steps to explain the process.

    // Add THORN, which replaces TH.
    newText = newText.replace(/th/g, "þ").replace(/TH/g, "Þ").replace(/Th/g, "Þ");

    // Add LONG S, which replaces LOWERCASE S, to everything except the ends of words (and the end of the string).
    newText = newText.replace(/s(?![.!?,;:\s])(?!$)/g, "ſ");

    // In the cases of a double LONG S, change the second one back to a SHORT S.
    newText = newText.replace(/ſſ/g, "ſs");

    // If LONG S comes before APOSTROPHE, change back to SHORT S.
    newText = newText.replace(/ſ(?=['`’])/g, "s");

    // If LONG S comes after F, change back to SHORT S.
    newText = newText.replace(/(?<=f)ſ/g, "s");

    // If LONG S comes before F, change back to SHORT S.
    newText = newText.replace(/ſ(?=f)/g, "s");

    document.getElementById("text-input").value = newText;

    // Animate text color
    animateTextColor();
    setTimeout(resetTextColor, 1000);
}

// Copy text to clipboard
function copyNotification() {
    document.getElementById("copy-notification").style.visibility = "hidden";
    document.getElementById("copy-notification").style.animation = "";
}

function copyToClipboard() {
    if (document.getElementById("text-input").value) {
        navigator.clipboard.writeText(document.getElementById("text-input").value);
        document.getElementById("copy-notification").style.visibility = "visible";
        document.getElementById("copy-notification").style.animation = "copy-animation 4s ease-out";
        setTimeout(copyNotification, 2000);
        // Animate text color
        animateTextColor();
        setTimeout(resetTextColor, 1000);
    } else {
        // No text to copy
    }
}

// Erase all in
function eraseText() {
    document.getElementById("text-input").value = "";
    inputtedText = "";
    originalText = "";
    newText = "";
}