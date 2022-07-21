var increaseHour = document.getElementById("hour-up");
var decreaseHour = document.getElementById("hour-down");
var increaseMinute = document.getElementById("minute-up");
var decreaseMinute = document.getElementById("minute-down");
var increaseSeconds = document.getElementById("seconds-up");
var decreaseSeconds = document.getElementById("seconds-down");
var hourInput = document.getElementById("hour-input").value;
hourInput = parseInt(hourInput);
var minuteInput = document.getElementById("minute-input");
var secondsInput = document.getElementById("seconds-input");


console.log(hourInput.value);


// increaseHour.addEventListener("click", function(){
//     var hourInputValue = hourInput.value;
//     hourInputValue ++;
// });