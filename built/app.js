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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return calculator; });
/* harmony export (immutable) */ __webpack_exports__["c"] = displayCurrentDigit;
/* harmony export (immutable) */ __webpack_exports__["b"] = pressDigit;
/* unused harmony export addFirstDigit */
// export function pressDigit(event, dispay) {
//     var valueOnDisplay="";
//     if (dispay.value.length>0)
//     {
//         var arrDisplay = dispay.value.concat(event.target.value);
//         arrDisplay.forEach(function(element, index, array)
//         {
//             valueOnDisplay = valueOnDisplay + element;
//         });
//     } else {
//         valueOnDisplay = event.target.value;
//     }
//     return valueOnDisplay;
// }

let Calculator = function () {
    this.firstDigit = 0;
    this.isFirstDigitAvailable = true;
    this.secondDigit = 0;
    this.isSecondDigitAvailable = false;
    this.sign = "";
    this.sum = function () {
        return this.firstDigit + this.secondDigit;
    };
};

var calculator = function () {
    if (calculator.instance) {
        return calculator.instance;
    }
    return new Calculator();
};

function displayCurrentDigit(calculator) {
    if (calculator.isFirstDigitAvailable && !calculator.isSecondDigitAvailable) {
        return calculator.firstDigit;
    } else {
        return calculator.secondDigit;
    }
}

function pressDigit(event, calculator) {
    var digit = event.target.value;
    if (displayCurrentDigit(calculator) > 0) {
        if (calculator.isFirstDigitAvailable && !calculator.isSecondDigitAvailable) {
            addFirstDigitToEnd(digit, calculator);
        } else {
            addSecondDigitToEnd(digit);
        }
    } else {
        if (calculator.isFirstDigitAvailable && !calculator.isSecondDigitAvailable) {
            addFirstDigit(digit, calculator);
        } else {
            addSecondDigit(digit);
        }
    }
    return displayCurrentDigit(calculator);
}

function addFirstDigit(digit, calculator) {
    calculator.firstDigit = digit;
}

function addSecondDigit(digit) {
    calculator.secondDigit = Number.parseInt(digit);
}

function addFirstDigitToEnd(digit, calculator) {
    var result = calculator.firstDigit * 10 + digit;
    calculator.firstDigit = result;
}

function addSecondDigitToEnd(digit) {
    var result = calculator.secondDigit * 10 + Number.parseInt(digit);
    calculator.secondDigit = result;
}

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_js__ = __webpack_require__(0);




var key8 = document.getElementById("8");
key8.addEventListener("click", function (event) {
    let calc = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__index_js__["a" /* calculator */])();
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__index_js__["b" /* pressDigit */])(event, calc);
    document.getElementById("display").value = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__index_js__["c" /* displayCurrentDigit */])(calc);
}, false);

/***/ })
/******/ ]);