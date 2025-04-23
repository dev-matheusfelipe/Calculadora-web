// script.js
let display = document.getElementById('display');
let currentInput = '';
let operator = null;
let firstOperand = null;

function appendNumber(number) {
    currentInput += number;
    display.innerHTML = currentInput;
}

function appendOperator(op) {
    if (currentInput === '' && firstOperand === null) return;

    if (firstOperand !== null && currentInput !== '') {
        calculate();
    }

    firstOperand = parseFloat(display.innerHTML);
    operator = op;
    display.innerHTML = firstOperand + ' <span style="color: #ff9800;">' + operator + '</span> ';
    currentInput = '';
}

function clearDisplay() {
    currentInput = '';
    operator = null;
    firstOperand = null;
    display.innerHTML = '';
}

function deleteLast() {
    currentInput = currentInput.slice(0, -1);
    display.innerHTML = currentInput;
}

function calculate() {
    if (operator === null || firstOperand === null) return;

    const secondOperand = parseFloat(currentInput);
    let result;

    switch (operator) {
        case '+':
            result = firstOperand + secondOperand;
            break;
        case '-':
            result = firstOperand - secondOperand;
            break;
        case '*':
            result = firstOperand * secondOperand;
            break;
        case '/':
            if (secondOperand === 0) {
                result = 'Erro!';
            } else {
                result = firstOperand / secondOperand;
            }
            break;
        default:
            return;
    }

    if (isNaN(result) || !isFinite(result)) {
        display.innerHTML = 'Erro!';
        currentInput = '';
        operator = null;
        firstOperand = null;
        return;
    }

    display.innerHTML = result;
    currentInput = String(result);
    operator = null;
    firstOperand = null;
}