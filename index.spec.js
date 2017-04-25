import {pressDigit} from "./index.js";

describe('Clicking on digits by Event', function() {
    it('shows entered digit on display', function() {
        // var testDigit ={ value: 5};
        var event = { target: {value: 5}};
        var digitOnDisplay = pressDigit(event);
        expect(digitOnDisplay).toBe(5);
    });
});
