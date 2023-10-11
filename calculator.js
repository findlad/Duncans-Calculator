let displayTotal = "";
let previousNumber = "";
let add = false;
let subtract = false;
let multiply = false;
let divide = false;
let answer = 0;
let display = document.getElementById("display");

function calcButton(number) {
  console.log(number);
  displayTotal = displayTotal + number;
  display.value = displayTotal;
}
function clearButton() {
  console.log("Clear");
  displayTotal = "";
  display.value = displayTotal;
}

function addButton() {
  previousNumber = displayTotal;
  clearButton();
  add = true;
  subtract = false;
  divide = false;
  multiply = false;
}

function subtractButton() {
  previousNumber = displayTotal;
  clearButton();
  add = false;
  subtract = true;
  divide = false;
  multiply = false;
}

function divideButton() {
  previousNumber = displayTotal;
  clearButton();
  add = false;
  subtract = false;
  divide = true;
  multiply = false;
}

function multiplyButton() {
  previousNumber = displayTotal;
  clearButton();
  add = false;
  subtract = false;
  divide = false;
  multiply = true;
}

function equalsButton() {
  console.log(previousNumber);
  console.log(displayTotal);
  console.log("+ " + add);
  console.log("- " + subtract);
  console.log("x " + multiply);
  console.log("/ " + divide);
  if (add == true) {
    answer = Number(previousNumber) + Number(displayTotal);
    console.log(answer);
    display.value = Number(answer);
    add = false;
  } else if (subtract == true) {
    answer = Number(previousNumber) - Number(displayTotal);
    display.value = answer;
    console.log(answer);
    subtract = false;
  } else if (multiply == true) {
    answer = Number(previousNumber) * Number(displayTotal);
    display.value = answer;
    console.log(answer);
    multiply = false;
  } else {
    answer = Number(previousNumber) / Number(displayTotal);
    display.value = answer;
    console.log(answer);
    divide = false;
  }
}
