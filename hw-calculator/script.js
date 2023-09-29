let currentInput = "";
let result = null;
let operator = "";

function appendToDisplay(value) {
  currentInput += value;
  document.getElementById("display").value = currentInput;
}

function clearDisplay() {
  currentInput = "";
  result = null;
  operator = "";
  document.getElementById("display").value = "";
}

function calculateResult() {
  if (currentInput === "") return;
  try {
    result = eval(currentInput);
    document.getElementById("display").value = result;
    currentInput = result.toString();
  } catch (error) {
    document.getElementById("display").value = "Error";
  }
}
