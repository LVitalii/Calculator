/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Calculator; });
/* harmony export (immutable) */ __webpack_exports__["c"] = displayCurrentDigit;
/* harmony export (immutable) */ __webpack_exports__["d"] = pressDigit;
/* unused harmony export addFirstDigit */
/* harmony export (immutable) */ __webpack_exports__["b"] = pressClear;
/* harmony export (immutable) */ __webpack_exports__["e"] = pressSum;
/* harmony export (immutable) */ __webpack_exports__["f"] = pressEqual;
var Calculator = function () {
    this.firstCell = "";
    this.isFirstCellAvailable = true;
    this.secondCell = "";
    this.isSecondCellAvailable = false;
    this.sign = "";
    this.sum = function () {
        return this.firstCell + this.secondCell;
    };
};

// export var calculator = function () {
//     if (!calculator.instance)
//     {
//         calculator.instance = new Calculator();
//     }
//     return calculator.instance;
// }

function displayCurrentDigit(calculator) {
    if (calculator.isFirstCellAvailable && !calculator.isSecondCellAvailable) {
        return calculator.firstCell;
    } else {
        return calculator.secondCell;
    }
}

function pressDigit(event, calculator) {
    var digit = event.target.value;
    if (displayCurrentDigit(calculator).length > 0) {
        if (calculator.isFirstCellAvailable && !calculator.isSecondCellAvailable) {
            addFirstDigitToEnd(digit, calculator);
        } else {
            addSecondDigitToEnd(digit, calculator);
        }
    } else {
        if (calculator.isFirstCellAvailable && !calculator.isSecondCellAvailable) {
            addFirstDigit(digit, calculator);
        } else {
            addSecondDigit(digit, calculator);
        }
    }
    return displayCurrentDigit(calculator);
}

function addFirstDigit(digit, calculator) {
    calculator.firstCell = digit;
}

function addSecondDigit(digit, calculator) {
    calculator.secondCell = digit;
}

function addFirstDigitToEnd(digit, calculator) {
    var result = calculator.firstCell + digit;
    calculator.firstCell = result;
}

function addSecondDigitToEnd(digit, calculator) {
    var result = calculator.secondCell + digit;
    calculator.secondCell = result;
}

function pressClear(calculator) {
    calculator.firstCell = "";
    calculator.secondCell = "";
    if (calculator.isSecondCellAvailable) {
        calculator.isFirstCellAvailable = true;
        calculator.isSecondCellAvailable = false;
    }
    return calculator;
}

function pressSum(calculator) {
    if (calculator.isFirstCellAvailable) {
        calculator.isFirstCellAvailable = false;
        calculator.isSecondCellAvailable = true;
        calculator.sign = "+";
    } else {
        // calculator.firstCell=Number.parseInt(calculator.firstCell)+Number.parseInt(calculator.secondCell);
        calculator.firstCell = (parseInt(calculator.firstCell, 10) + parseInt(calculator.secondCell, 10)).toString();
        calculator.secondCell = "";
        calculator.isFirstCellAvailable = true;
        calculator.isSecondCellAvailable = false;
    }
    return calculator;
}
function pressEqual(calculator) {
    var result = 0;
    if (calculator.isFirstCellAvailable) {
        return result = parseInt(calculator.firstCell, 10);
    } else {
        switch (calculator.sign) {
            case "+":
                result = parseInt(calculator.firstCell, 10) + parseInt(calculator.secondCell, 10);break;
            case "-":
                result = parseInt(calculator.firstCell, 10) - parseInt(calculator.secondCell, 10);break;
            case "*":
                result = parseInt(calculator.firstCell, 10) * parseInt(calculator.secondCell, 10);break;
            case "/":
                result = parseInt(calculator.firstCell, 10) / parseInt(calculator.secondCell, 10);break;
            default:
                result = 0;break;
        }
        calculator.firstCell = "";
        calculator.secondCell = "";
        calculator.isFirstCellAvailable = true;
        calculator.isSecondCellAvailable = false;
        calculator.sign = "";
    }
    return result;
}

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_js__ = __webpack_require__(0);







var calculator = new __WEBPACK_IMPORTED_MODULE_0__index_js__["a" /* Calculator */]();

var keyC = document.getElementById("c");
keyC.addEventListener("click", function () {
    var calc = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__index_js__["b" /* pressClear */])(calculator);
    document.getElementById("display").value = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__index_js__["c" /* displayCurrentDigit */])(calc);
}, false);

var key9 = document.getElementById("9");
key9.addEventListener("click", function (event) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__index_js__["d" /* pressDigit */])(event, calculator);
    document.getElementById("display").value = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__index_js__["c" /* displayCurrentDigit */])(calculator);
}, false);

var key8 = document.getElementById("8");
key8.addEventListener("click", function (event) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__index_js__["d" /* pressDigit */])(event, calculator);
    document.getElementById("display").value = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__index_js__["c" /* displayCurrentDigit */])(calculator);
}, false);

var key7 = document.getElementById("7");
key7.addEventListener("click", function (event) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__index_js__["d" /* pressDigit */])(event, calculator);
    document.getElementById("display").value = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__index_js__["c" /* displayCurrentDigit */])(calculator);
}, false);

var key6 = document.getElementById("6");
key6.addEventListener("click", function (event) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__index_js__["d" /* pressDigit */])(event, calculator);
    document.getElementById("display").value = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__index_js__["c" /* displayCurrentDigit */])(calculator);
}, false);

var key5 = document.getElementById("5");
key5.addEventListener("click", function (event) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__index_js__["d" /* pressDigit */])(event, calculator);
    document.getElementById("display").value = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__index_js__["c" /* displayCurrentDigit */])(calculator);
}, false);

var key4 = document.getElementById("4");
key4.addEventListener("click", function (event) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__index_js__["d" /* pressDigit */])(event, calculator);
    document.getElementById("display").value = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__index_js__["c" /* displayCurrentDigit */])(calculator);
}, false);

var key3 = document.getElementById("3");
key3.addEventListener("click", function (event) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__index_js__["d" /* pressDigit */])(event, calculator);
    document.getElementById("display").value = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__index_js__["c" /* displayCurrentDigit */])(calculator);
}, false);

var key2 = document.getElementById("2");
key2.addEventListener("click", function (event) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__index_js__["d" /* pressDigit */])(event, calculator);
    document.getElementById("display").value = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__index_js__["c" /* displayCurrentDigit */])(calculator);
}, false);

var key1 = document.getElementById("1");
key1.addEventListener("click", function (event) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__index_js__["d" /* pressDigit */])(event, calculator);
    document.getElementById("display").value = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__index_js__["c" /* displayCurrentDigit */])(calculator);
}, false);

var key0 = document.getElementById("0");
key0.addEventListener("click", function (event) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__index_js__["d" /* pressDigit */])(event, calculator);
    document.getElementById("display").value = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__index_js__["c" /* displayCurrentDigit */])(calculator);
}, false);

var keyAdd = document.getElementById("add");
keyAdd.addEventListener("click", function () {
    var calc = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__index_js__["e" /* pressSum */])(calculator);
    document.getElementById("display").value = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__index_js__["c" /* displayCurrentDigit */])(calc);
}, false);

var keyEqual = document.getElementById("equal");
keyEqual.addEventListener("click", function () {
    var result = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__index_js__["f" /* pressEqual */])(calculator);
    document.getElementById("display").value = result;
}, false);

/***/ })
/******/ ]);