'use strict';


function convertText() {
let originalText = document.getElementById("text-input").value;

let textOutputBox = document.getElementById("text-output");
let newText = originalText.replace(/t/g, "þ").replace(/T/g, "Þ").replace(/s(?!\s)/g, "ſ");

// .replace(/ſ+\s, "s")
textOutputBox.textContent = newText;


}