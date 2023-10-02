let currentInput = "";

function appendToDisplay(value) {
  currentInput += value;
  document.getElementById("display").value = currentInput;
}

function clearDisplay() {
  currentInput = "";
  document.getElementById("display").value = "";
}

function calculateResult() {
  try {
    const result = evaluateExpression(currentInput);
    document.getElementById("display").value = result;
    currentInput = result.toString();
  } catch (error) {
    document.getElementById("display").value = "Error";
  }
}

function evaluateExpression(expression) {

  const sanitizedExpression = expression.replace(/[^0-9+\-*/().]/g, "");

  
  return Function(`'use strict'; return (${sanitizedExpression})`)();
}
