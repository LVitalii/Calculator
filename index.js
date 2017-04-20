function pressDigitKey(digit){
    var display=document.getElementById("display");
    var value = display.value;
    if (value.length>0){
        value=value.concat(digit);
    } else {
        value=digit;
    }
    display.value = value;
    return display.value;
}