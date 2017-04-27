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
    this.firstDigit=0;
    this.isFirstDigitAvailable=true;
    this.secondDigit=0;
    this.isSecondDigitAvailable=false;
    this.sign="";
    this.sum=function () {
        return this.firstDigit+this.secondDigit;
    }
}

export var calculator = function () {
    if (calculator.instance)
    {
        return calculator.instance;
    }
    return new Calculator();
}

export function displayCurrentDigit(calculator) {
    if (calculator.isFirstDigitAvailable && !calculator.isSecondDigitAvailable)
    {
        return calculator.firstDigit;
    } else {
        return calculator.secondDigit;
    }
}

export function pressDigit(event, calculator) {
    var digit = event.target.value;
    if (displayCurrentDigit(calculator)>0) {
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

export function addFirstDigit(digit, calculator) {
    calculator.firstDigit = digit;
}

function addSecondDigit(digit) {
    calculator.secondDigit = Number.parseInt(digit);
}

function addFirstDigitToEnd(digit, calculator) {
    var result = calculator.firstDigit *10 + digit;
    calculator.firstDigit = result;
}

function addSecondDigitToEnd(digit) {
    var result = calculator.secondDigit *10 + Number.parseInt(digit);
    calculator.secondDigit = result;
}

