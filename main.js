"use strict";

var display = document.getElementById('display'), // display
  number = document.querySelectorAll('.numbers div'), // numbers
  operator = document.querySelectorAll('.operators div'), // operators
  result = document.getElementById('result'), // equals
  clear = document.getElementById('clear'), // clear
  resultDisplayed = false; // watching output is displayed

// adding click handlers to number buttons
for (var i = 0; i < number.length; i++) {
  number[i].addEventListener("click", function(e) {

    // storing current string and its last character in variables - used later
    var currentString = display.innerHTML;
    var lastChar = currentString[currentString.length - 1];

    // if result is not diplayed, just keep adding
    if (resultDisplayed === false) {
      display.innerHTML += e.target.innerHTML;
    } else if (resultDisplayed === true && lastChar === "+" || lastChar === "-" || lastChar === "×" || lastChar === "÷") {
      // if result is currently displayed and user pressed an operator
      // we need to keep on adding to the string for next operation
      resultDisplayed = false;
      display.innerHTML += e.target.innerHTML;
    } else {
      // if result is currently displayed and user pressed a number
      // we need clear the string and add the new input to start the new opration
      resultDisplayed = false;
      display.innerHTML = "";
      display.innerHTML += e.target.innerHTML;
    }

  });
}

for (var i = 0; i < operator.length; i++) {
  operator[i].addEventListener("click", function(e) {

    var currentString = display.innerHTML;
    var lastChar = currentString[currentString.length - 1]; // storing string using event listener

    if (lastChar === "+" || lastChar === "-" || lastChar === "×" || lastChar === "÷") {
      var newString = currentString.substring(0, currentString.length - 1) + e.target.innerHTML;
      display.innerHTML = newString;
    } else if (currentString.length == 0) {
      console.log("enter a number first");
    } else {
      display.innerHTML += e.target.innerHTML;
    }
  });
}  // if last character pushed is operator but different required: change, else if first pressed is opearator, don't do anything. Else add to display.

result.addEventListener("click", function() {

   var equation = display.innerHTML.replace(/÷/g,"/").replace(/×/g,"*");
   display.innerHTML = eval(equation);
   resultDisplayed = true;
}); //replace all occurences of actual division sign with / and same for multiplication

clear.addEventListener("click", function() {
  display.innerHTML = "";
}) // press c = clearing display
