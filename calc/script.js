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
  const operands = currentInput.split(/(\+|-|\*|\/)/);
  if (operands.length !== 3) {
    document.getElementById("display").value = "Error";
    return;
  }
  const num1 = parseFloat(operands[0]);
  const num2 = parseFloat(operands[2]);
  switch (operands[1]) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    case "/":
      if (num2 === 0) {
        document.getElementById("display").value = "Error";
        return;
      }
      result = num1 / num2;
      break;
  }
  document.getElementById("display").value = result;
  currentInput = result.toString();
}
