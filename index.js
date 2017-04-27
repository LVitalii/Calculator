export function pressDigit(event, dispay) {
    var valueOnDisplay="";
    if (dispay.value.length>0)
    {
        var arrDisplay = dispay.value.concat(event.target.value);
        arrDisplay.forEach(function(element, index, array)
        {
            valueOnDisplay = valueOnDisplay + element;
        });
    } else {
        valueOnDisplay = event.target.value;
    }
    return valueOnDisplay;
}

// export function oneDigit(event) {
//     return event.target.value;
// }
//
// export function moreDigits(event) {
//     return
// }
