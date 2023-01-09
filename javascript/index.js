'use strict';

let originalText;
let textOutputBox = document.getElementById("text-output");
let newText;
const isUpperCase = str => str === str.toUpperCase();

function convertTextOlde() {
    originalText = document.getElementById("text-input").value;
    newText = originalText;

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

    textOutputBox.textContent = newText;
}

function convertTextModern() {
    originalText = document.getElementById("text-input").value;
    newText = originalText;

    // Here is where the conversion happens, divided into separate steps to explain the process.

    // Change THORN to TH.
    if (isUpperCase(newText) === true) {
        // The text is ALL CAPS. THORN should convert to UPPERCASE T & UPPERCASE H.
        newText = newText.replace(/þ/g, "th").replace(/Þ/g, "TH");
    } else {
        // The text is not ALL CAPS. THORN should convert to UPPERCASE T &  LOWERCASE H.
        newText = newText.replace(/þ/g, "th").replace(/Þ/g, "Th");
    }

    // Change LONG S to SHORT S.
    // No need to check for ALL CAPS, since LONG S is inherently a LOWERCASE letter.
    newText = newText.replace(/ſ/g, "s");

    textOutputBox.textContent = newText;
}


// Copy text to clipboard
function copyToClipboard() {
    if (newText) {
        navigator.clipboard.writeText(newText);
        console.log("text copied");
    } else {
        console.log("no text to copy");
    }
}

// Erase all in
function eraseText() {
    document.getElementById("text-input").value = "";
    textOutputBox.textContent = "";
    originalText = "";
    newText = "";
}