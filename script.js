let currentNumber = '';
let operator = '';
let previousNumber = '';

function appendNumber(number) {
  currentNumber += number;
  updateDisplay(currentNumber);
}

function appendOperator(op) {
  if (operator !== '') {
    calculate();
  }
  operator = op;
  previousNumber = currentNumber;
  currentNumber = '';
}

function calculate() {
  let result;
  const num1 = parseFloat(previousNumber);
  const num2 = parseFloat(currentNumber);
  switch (operator) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    case '/':
      result = num1 / num2;
      break;
    default:
      return;
  }
  updateDisplay(result.toString());
  currentNumber = result.toString();
  operator = '';
}

function clearDisplay() {
  currentNumber = '';
  operator = '';
  previousNumber = '';
  updateDisplay('');
}

function updateDisplay(value) {
  document.getElementById('display').value = value;
}
