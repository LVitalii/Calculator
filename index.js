export function pressDigit(event) {
    var result = event.target.value;
    setDisplay(result);
    return result;
}

function setDisplay (value) {
    document.getElementById("display").value = value;
}
