let displayValue = document.querySelector('#display-section span')

const buttons = document.querySelectorAll('.input-btn');
buttons.forEach(button => {
    button.addEventListener('click', () => {
        displayValue.textContent += button.textContent
        if (displayValue.textContent[0] == '0')
            displayValue.textContent = displayValue.textContent.substring(1, displayValue.textContent.length)
    })
})


const addButton = document.querySelector('#add-btn')
const subtractButton = document.querySelector('#subtract-btn')
const multiplyButton = document.querySelector('#multiply-btn')
const divideButton = document.querySelector('#divide-btn')
const deleteButton = document.querySelector('#delete-btn')
const clearButton = document.querySelector('#clear-btn')
const equalsButton = document.querySelector('#equals-btn')

let currentOperation = '';
let firstValue = 0
let secondValue = 0

deleteButton.addEventListener('click', () => {
    if (displayValue.textContent.length == 1) {
        displayValue.textContent = '0'
        return;
    }
    displayValue.textContent = displayValue.textContent.substring(0, displayValue.textContent.length - 1)
})

clearButton.addEventListener('click', () => {
    displayValue.textContent = '0'
})

addButton.addEventListener('click', () => {
    firstValue = displayValue.textContent
    displayValue.textContent = '0'
    currentOperation = 'addition'
})

subtractButton.addEventListener('click', () => {
    firstValue = displayValue.textContent
    displayValue.textContent = '0'
    currentOperation = 'subtraction'
})

multiplyButton.addEventListener('click', () => {
    firstValue = displayValue.textContent
    displayValue.textContent = '0'
    currentOperation = 'multiplication'
})

divideButton.addEventListener('click', () => {
    firstValue = displayValue.textContent
    displayValue.textContent = '0'
    currentOperation = 'division'
})


equalsButton.addEventListener('click', () =>
    operate(firstValue, displayValue.textContent, currentOperation))

function add(a,b) {
    return Number(a) + Number(b);
}

function subtract(a,b) {
    return Number(a) - Number(b);
}

function multiply(a,b) {
    return Number(a) * Number(b);
}

function divide(a,b) {
    return Number(a) / Number(b);
}

function operate (firstNumber, secondNumber, operation) {
    if (currentOperation === 'addition') {
        displayValue.textContent = add(firstValue, displayValue.textContent)
    }
    else if (currentOperation === 'subtraction') {
        displayValue.textContent = subtract(firstValue, displayValue.textContent)
    }
    else if (currentOperation === 'multiplication') {
        displayValue.textContent = multiply(firstValue, displayValue.textContent)
    }
    else if (currentOperation === 'division') {
        displayValue.textContent = divide(firstValue, displayValue.textContent)
    }
}