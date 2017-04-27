import {pressDigit} from "./index.js";

// describe('Clicking on digits by Event', function() {
//     it('shows entered digit on display if there is no digits on display', function() {
//         var event = { target: {value: 5}};
//         var display = {value: []};
//         var digitOnDisplay = pressDigit(event, display);
//         expect(digitOnDisplay).toBe(5);
//     });
//
//     it('shows entered digit at the end of the display value in case there are already digits', function() {
//         var event = { target: {value: 5}};
//         var display = {value: [8]};
//         var digitOnDisplay = pressDigit(event, display);
//         expect(digitOnDisplay).toBe("85");
//     });
// });

describe('Clicking on digits by Event', function() {
    it('shows entered first digit on display if there is no digits on display', function() {
        var event = { target: {value: 8}};
        var calculator = {
            firstDigit:0,
            isFirstDigitAvailable:true,
            secondDigit:0,
            isSecondDigitAvailable:false,
            sign:""
        }
        var digitOnDisplay = pressDigit(event, calculator);
        expect(digitOnDisplay).toBe(8);
    });

    it('shows entered digit at the end of the display value in case there are already digits', function() {
        var event = { target: {value: 8}};
        var calculator = {
            firstDigit:888,
            isFirstDigitAvailable:true,
            secondDigit:0,
            isSecondDigitAvailable:false,
            sign:""
        }
        var digitOnDisplay = pressDigit(event, calculator);
        expect(digitOnDisplay).toBe(8888);
    });
    // });
});