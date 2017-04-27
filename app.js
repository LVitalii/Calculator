import {pressDigit} from "./index.js";

var key8 = document.getElementById("8");
key8.addEventListener("click", function (event) {
    let value = pressDigit(event);
    document.getElementById("display").value=value;
} , false);
