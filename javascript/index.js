'use strict';


function convertText() {
let originalText = document.getElementById("text-input").value;

let textOutputBox = document.getElementById("text-output");

// Here is where the conversion happens, divided into separate steps to explain the process.

// Add THORN, which replaces TH.
let newText = originalText.replace(/th/g, "þ").replace(/TH/g, "Þ").replace(/Th/g, "Þ");

// Add LONG S, which replaces LOWERCASE S, to everything except the ends of words (and the end of the string).
newText = newText.replace(/s(?![.!?\s])(?!$)/g, "ſ");

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