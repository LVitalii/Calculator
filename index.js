function pressDigitKey(digit, display){
    var value = display.value;
    if (value.length>0){
        value=value.concat(digit);
    } else {
        value=digit;
    }
    display.value = value;
    return display.value;
}

function cleanDisplay(display){
    display.value = null;
    return display.value;
}

function pressAdding(display){
    memorySign.set("plus");
    return display.value;
}

function pressEqual(display){
    if (sign.value===null){
        return display.value;
    }
}

var sign = {value:null};
var firstArgument = {value:null};

function setMemorySign(sign) {
    sign.value=sign;
}

function getMemorySign() {
    return sign.value;
}

function setFirstArgument(argument) {
    firstArgument.value = argument;
}

function getFirstArgument(){
    return firstArgument.value;
}

// function press(display) {
//     // var display=document.getElementById("display");
//     if (display !== undefined)
//     {
//         display = getDisplay();
//     }
//     var value = display.value;
//     if (value.length>0){
//         value=value.concat(this.value);
//     } else {
//         value=this.value;
//     }
//     display.value = value;
//     return display.value;
// }
//
// function getDisplay() {
//     return document.getElementById("display");
// }
//
// var key8 = document.getElementById("8");
// key8.addEventListener("click", press, false);