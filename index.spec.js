import {pressDigit} from "./index.js";

describe('Clicking on digits by Event', function() {
    it('shows entered digit on display if there is no digits on display', function() {
        var event = { target: {value: 5}};
        var display = {value: []};
        var digitOnDisplay = pressDigit(event, display);
        expect(digitOnDisplay).toBe(5);
    });

    it('shows entered digit at the end of the display value in case there are already digits', function() {
        var event = { target: {value: 5}};
        var display = {value: [8]};
        var digitOnDisplay = pressDigit(event, display);
        expect(digitOnDisplay).toBe("85");
    });
});
