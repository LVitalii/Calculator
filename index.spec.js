import {pressDigit} from "./index.js";
import {pressClear} from "./index.js";
import {pressSum} from "./index.js";
import {pressEqual} from "./index.js";

describe('Clicking on a digit', function() {
    it('shows entered first digit on display if there was no digits on display', function() {
        var event = { target: {value: "8"}};
        var calculator = {
            firstCell:"",
            isFirstCellAvailable:true,
            secondCell:"",
            isSecondCellAvailable:false,
            sign:""
        }
        var digitOnDisplay = pressDigit(event, calculator);
        expect(digitOnDisplay).toBe("8");
    });

    it('shows entered digit at the end of the display value in case there were already digits', function() {
        var event = { target: {value: "8"}};
        var calculator = {
            firstCell:"888",
            isFirstCellAvailable:true,
            secondCell:"",
            isSecondCellAvailable:false,
            sign:""
        }
        var digitOnDisplay = pressDigit(event, calculator);
        expect(digitOnDisplay).toBe("8888");
    });
});

describe('Clicking on Clear', function() {
    it('clears the first cell if the first operand is entered', function () {
        var calculator = {
            firstCell: "888",
            isFirstCellAvailable: true,
            secondCell: "",
            isSecondCellAvailable: false,
            sign: ""
        }
        var calc = pressClear(calculator);
        expect(calc.firstCell).toBe("");
    });

    it('makes the first cell available for writing if the first operand is entered', function () {
        var calculator = {
            firstCell: "888",
            isFirstCellAvailable: true,
            secondCell: "",
            isSecondCellAvailable: false,
            sign: ""
        }
        var calc = pressClear(calculator);
        expect(calc.isFirstCellAvailable).toBeTruthy();
    });

    it('clears the first and second cells if the second operand is entered', function () {
        var calculator = {
            firstCell: "888",
            isFirstCellAvailable: false,
            secondCell: "88888",
            isSecondCellAvailable: true,
            sign: ""
        }
        var calc = pressClear(calculator);
        expect(calc.firstCell).toBe("");
        expect(calc.secondCell).toBe("");
    });

    it('makes the first cell available for writing if the second operand is entered', function () {
        var calculator = {
            firstCell: "888",
            isFirstCellAvailable: false,
            secondCell: "88888",
            isSecondCellAvailable: true,
            sign: ""
        }
        var calc = pressClear(calculator);
        expect(calc.isFirstCellAvailable).toBeTruthy();
        expect(calc.isSecondCellAvailable).toBeFalsy();
    });
});

describe('Clicking on Sum', function() {
    it('shows the first operand on display if the first operand was entered', function () {
        var calculator = {
            firstCell: "14",
            isFirstCellAvailable: true,
            secondCell: "",
            isSecondCellAvailable: false,
            sign: ""
        }
        var calc = pressSum(calculator);
        expect(calc.firstCell).toBe("14");
    });
    it('makes the second cell available if the first operand was entered', function () {
        var calculator = {
            firstCell: "15",
            isFirstCellAvailable: true,
            secondCell: "",
            isSecondCellAvailable: false,
            sign: ""
        }
        var calc = pressSum(calculator);
        expect(calc.isSecondCellAvailable).toBeTruthy();
    });
    it('writes the sum of 2 operands for the first cell if the second operand was entered', function () {
        var calculator = {
            firstCell: "15",
            isFirstCellAvailable: false,
            secondCell: "16",
            isSecondCellAvailable: true,
            sign: "+"
        }
        var calc = pressSum(calculator);
        expect(calc.firstCell).toBe("31");
    });
    it('makes the first cell available if the second operand was entered', function () {
        var calculator = {
            firstCell: "15",
            isFirstCellAvailable: false,
            secondCell: "17",
            isSecondCellAvailable: true,
            sign: "+"
        }
        var calc = pressSum(calculator);
        expect(calc.isFirstCellAvailable).toBeTruthy();
    });
    it('clears the second cells if the second operand was entered', function () {
        var calculator = {
            firstCell: "15",
            isFirstCellAvailable: false,
            secondCell: "18",
            isSecondCellAvailable: true,
            sign: "+"
        }
        var calc = pressSum(calculator);
        expect(calc.secondCell).toBe("");
    });

});

describe('Clicking on Equal', function() {
    it('shows the first operand on display if the first operand is entered', function () {
        var calculator = {
            firstCell: "9",
            isFirstCellAvailable: true,
            secondCell: "",
            isSecondCellAvailable: false,
            sign: ""
        }
        var result = pressEqual(calculator);
        expect(result).toBe(9);
    });
    it('shows the sum of 2 operands if the second operand was entered after the Sum was clicked', function () {
        var calculator = {
            firstCell: "15",
            isFirstCellAvailable: false,
            secondCell: "16",
            isSecondCellAvailable: true,
            sign: "+"
        }
        var result = pressEqual(calculator);
        expect(result).toBe(31);
    });
    it('clears the first and second cells and sign if the second operand was entered', function () {
        var calculator = {
            firstCell: "15",
            isFirstCellAvailable: false,
            secondCell: "16",
            isSecondCellAvailable: true,
            sign: "+"
        }
        pressEqual(calculator);
        expect(calculator.firstCell).toBe("");
        expect(calculator.secondCell).toBe("");
    });
    it('makes the first cell available for writing if the second operand was entered', function () {
        var calculator = {
            firstCell: "15",
            isFirstCellAvailable: false,
            secondCell: "16",
            isSecondCellAvailable: true,
            sign: ""
        }
        pressEqual(calculator);
        expect(calculator.isFirstCellAvailable).toBeTruthy();
    });
});