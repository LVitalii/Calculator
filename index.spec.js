describe('Test', function() {
    it('should be true', function() {
        expect(this).toBeTruthy();
    });
});

describe('Clicking on digits', function() {
    it('display shows entered digit', function() {
        var testDigit = 5;
        var obj = { value: []};
        var digitOnDisplay = pressDigitKey(testDigit, obj);
        expect(digitOnDisplay).toBe(testDigit);
    });

    it('display shows next entered digit as the last', function() {
        var firstTestDigit = 5;
        var secondTestDigit = 3;
        pressDigitKey(firstTestDigit);
        var digitOnDisplay = pressDigitKey(secondTestDigit);
        expect(digitOnDisplay).toBe(firstTestDigit + "" + secondTestDigit);
    });
});
