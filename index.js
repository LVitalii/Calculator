export var Calculator = function () {
    this.firstCell="";
    this.isFirstCellAvailable=true;
    this.secondCell="";
    this.isSecondCellAvailable=false;
    this.sign="";
    this.sum=function () {
        return this.firstCell+this.secondCell;
    }
}

// export var calculator = function () {
//     if (!calculator.instance)
//     {
//         calculator.instance = new Calculator();
//     }
//     return calculator.instance;
// }

export function displayCurrentDigit(calculator) {
    if (calculator.isFirstCellAvailable && !calculator.isSecondCellAvailable)
    {
        return calculator.firstCell;
    } else {
        return calculator.secondCell;
    }
}

export function pressDigit(event, calculator) {
    var digit = event.target.value;
    if (displayCurrentDigit(calculator).length>0) {
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

export function addFirstDigit(digit, calculator) {
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

export function pressClear(calculator) {
    calculator.firstCell = "";
    calculator.secondCell = "";
    if (calculator.isSecondCellAvailable) {
        calculator.isFirstCellAvailable = true;
        calculator.isSecondCellAvailable = false;
    }
    return calculator;
}

export  function pressSum (calculator) {
    if (calculator.isFirstCellAvailable){
        calculator.isFirstCellAvailable = false;
        calculator.isSecondCellAvailable = true;
        calculator.sign="+";
    } else {
        // calculator.firstCell=Number.parseInt(calculator.firstCell)+Number.parseInt(calculator.secondCell);
        calculator.firstCell=(parseInt(calculator.firstCell,10)+parseInt(calculator.secondCell,10)).toString();
        calculator.secondCell="";
        calculator.isFirstCellAvailable = true;
        calculator.isSecondCellAvailable = false;
    }
    return calculator;
}
export function pressEqual(calculator) {
    var result = 0;
    if (calculator.isFirstCellAvailable){
        return result = parseInt(calculator.firstCell,10);
    } else {
        switch (calculator.sign){
            case "+" : result = parseInt(calculator.firstCell,10)+parseInt(calculator.secondCell,10); break;
            case "-" : result = parseInt(calculator.firstCell,10)-parseInt(calculator.secondCell,10); break;
            case "*" : result = parseInt(calculator.firstCell,10)*parseInt(calculator.secondCell,10); break;
            case "/" : result = parseInt(calculator.firstCell,10)/parseInt(calculator.secondCell,10); break;
            default: result = 0; break;
        }
        calculator.firstCell=""
        calculator.secondCell="";
        calculator.isFirstCellAvailable = true;
        calculator.isSecondCellAvailable = false;
        calculator.sign = "";
    }
    return result;
}