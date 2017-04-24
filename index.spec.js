describe('Test', function() {
    it('should be true', function() {
        expect(this).toBeTruthy();
    });
});

describe('Clicking on digits', function() {
    it('display shows entered digit', function() {
        var testDigit = 5;
        var display = { value: []};
        var digitOnDisplay = pressDigitKey(testDigit, display);
        expect(digitOnDisplay).toBe(testDigit);
    });

    it('display shows next entered digit as the last', function() {
        var firstTestDigit = 5;
        var secondTestDigit = 3;
        var display = { value: []};
        var some = pressDigitKey(firstTestDigit, display);
        display.value.push(1);
        expect(some).toBe(45);
        var digitOnDisplay = pressDigitKey(secondTestDigit, display);
        // expect(digitOnDisplay).toBe(firstTestDigit + "" + secondTestDigit);
    });
});

describe('Clicking on Clean', function() {
    it('cleans the display', function() {
        var testDigit = 5;
        var display = { value: []};
        pressDigitKey(testDigit, display);
        var digitOnDisplay = cleanDisplay(display)
        expect(digitOnDisplay).toBe(null);
    });
});

describe('Clicking on plus', function() {
    it('shows the digit', function() {
        var display = { value: [5]};
        var digitOnDisplay = pressAdding(display);
        expect(digitOnDisplay).toBe(display.value);
    });
});

describe('Clicking on equal', function() {
    it('adds the first and and the second arguments and shows the result', function () {
        var firstDigit = 5;
        var secondDigit = 6;
        var display = {value: []};
        pressDigitKey(firstDigit, display);
        pressAdding(display);
        pressDigitKey(firstDigit, display);
        var digitOnDisplay = pressAdding(display);
        expect(digitOnDisplay).toBe(firstDigit + secondDigit);
    });
});
// describe('Clicking on digits by Event', function() {
//     it('display shows entered digit', function() {
//         var testDigit ={ value: 5};
//         var display = { value: []};
//         var digitOnDisplay = press.call(testDigit, display);
//         expect(digitOnDisplay).toBe(testDigit);
//     });
//
//     it('display shows next entered digit as the last', function() {
//         var testDigit ={ value: 5};
//         var display = { value: []};
//         var secondTestDigit = 3;
//         press.call(testDigit, display);
//         var digitOnDisplay = press.call(testDigit, display);
//         expect(digitOnDisplay).toBe(testDigit.value + "" + secondTestDigit);
//     });
// });
