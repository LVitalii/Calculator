import {pressDigit} from "./index.js";
import {displayCurrentDigit} from "./index.js";
import {calculator} from "./index.js";

var key8 = document.getElementById("8");
key8.addEventListener("click", function (event) {
    let calc = calculator();
    pressDigit(event, calc);
    document.getElementById("display").value=displayCurrentDigit(calc);
} , false);
