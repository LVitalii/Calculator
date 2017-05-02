import {pressDigit} from "./index.js";
import {displayCurrentDigit} from "./index.js";
import {Calculator} from "./index.js";
import {pressClear} from "./index.js";
import {pressSum} from "./index.js";
import {pressEqual} from "./index.js";

var calculator = new Calculator();

var keyC = document.getElementById("c");
keyC.addEventListener("click", function(){
    var calc = pressClear(calculator);
    document.getElementById("display").value=displayCurrentDigit(calc);
} , false);

var key9 = document.getElementById("9");
key9.addEventListener("click", function (event) {
    pressDigit(event, calculator);
    document.getElementById("display").value=displayCurrentDigit(calculator);
} , false);

var key8 = document.getElementById("8");
key8.addEventListener("click", function (event) {
    pressDigit(event, calculator);
    document.getElementById("display").value=displayCurrentDigit(calculator);
} , false);

var key7 = document.getElementById("7");
key7.addEventListener("click", function (event) {
    pressDigit(event, calculator);
    document.getElementById("display").value=displayCurrentDigit(calculator);
} , false);

var key6 = document.getElementById("6");
key6.addEventListener("click", function (event) {
    pressDigit(event, calculator);
    document.getElementById("display").value=displayCurrentDigit(calculator);
} , false);

var key5 = document.getElementById("5");
key5.addEventListener("click", function (event) {
    pressDigit(event, calculator);
    document.getElementById("display").value=displayCurrentDigit(calculator);
} , false);

var key4 = document.getElementById("4");
key4.addEventListener("click", function (event) {
    pressDigit(event, calculator);
    document.getElementById("display").value=displayCurrentDigit(calculator);
} , false);

var key3 = document.getElementById("3");
key3.addEventListener("click", function (event) {
    pressDigit(event, calculator);
    document.getElementById("display").value=displayCurrentDigit(calculator);
} , false);

var key2 = document.getElementById("2");
key2.addEventListener("click", function (event) {
    pressDigit(event, calculator);
    document.getElementById("display").value=displayCurrentDigit(calculator);
} , false);

var key1 = document.getElementById("1");
key1.addEventListener("click", function (event) {
    pressDigit(event, calculator);
    document.getElementById("display").value=displayCurrentDigit(calculator);
} , false);

var key0 = document.getElementById("0");
key0.addEventListener("click", function (event) {
    pressDigit(event, calculator);
    document.getElementById("display").value=displayCurrentDigit(calculator);
} , false);

var keyAdd = document.getElementById("add");
keyAdd.addEventListener("click", function(){
    var calc = pressSum(calculator);
    document.getElementById("display").value=displayCurrentDigit(calc);
} , false);

var keyEqual = document.getElementById("equal");
keyEqual.addEventListener("click", function(){
    var result = pressEqual(calculator);
    document.getElementById("display").value=result;
} , false);