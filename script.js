let displayValue = document.querySelector('#current-input')

const buttons = document.querySelectorAll('.input-btn');
buttons.forEach(button => {
    button.addEventListener('click', () => {
        if (displayValue.textContent.length < 19)
            displayValue.textContent += button.textContent
        if (displayValue.textContent[0] == '0')
            displayValue.textContent = displayValue.textContent.substring(1, displayValue.textContent.length)
    })
})


const addButton = document.querySelector('#add-btn')
const subtractButton = document.querySelector('#subtract-btn')
const multiplyButton = document.querySelector('#multiply-btn')
const divideButton = document.querySelector('#divide-btn')
const oppositeButton = document.querySelector('#opposite-btn')
const squareRootButton = document.querySelector('#root-btn')
const deleteButton = document.querySelector('#delete-btn')
const clearButton = document.querySelector('#clear-btn')
const equalsButton = document.querySelector('#equals-btn')

let currentOperation = '';
let firstValue = 0
let secondValue = 0

oppositeButton.addEventListener('click', () => {
    displayValue.textContent = opposite(displayValue.textContent)
})

squareRootButton.addEventListener('click', () => {
    displayValue.textContent = squareRoot(displayValue.textContent)
})

deleteButton.addEventListener('click', () => {
    if (displayValue.textContent.length == 1) {
        displayValue.textContent = '0'
        return;
    }
    displayValue.textContent = displayValue.textContent.substring(0, displayValue.textContent.length - 1)
})

clearButton.addEventListener('click', clearAll)

const previousInputs = document.querySelector('#previous-inputs')

firstValue = getInput()

equalsButton.addEventListener('click', () => {
    secondValue = Number(displayValue.textContent);
    operate(firstValue, secondValue, currentOperation);
    previousInputs.textContent = ''
});

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
    return Number(b) != 0 ? Number(a) / Number(b) : 'why';
}

function opposite(a) {
    return Number(a) * -1;
}

function squareRoot(a) {
    return Math.sqrt(Number(a));
}

function clear() {
    displayValue.textContent = '0'
    currentOperation = ''
}

function clearAll() {
    displayValue.textContent = '0'
    previousInputs.innerHTML = ""
}

function operate (firstValue, secondValue, operation) {
    if (operation === 'addition') {
        displayValue.textContent = add(firstValue, secondValue)
    }
    else if (operation === 'subtraction') {
        displayValue.textContent = subtract(firstValue, secondValue)
    }
    else if (operation === 'multiplication') {
        displayValue.textContent = multiply(firstValue, secondValue)
    }
    else if (operation === 'division') {
        if (secondValue == 0)
            previousInputs.innerHTML = ''
        displayValue.textContent = divide(firstValue, secondValue)
    }

}

function getInput() {
    addButton.addEventListener('click', () => {
        displayValue.value = Number(displayValue.textContent)
        firstValue = displayValue.value

        if (false) {
            currentOperation = 'addition'
            console.log("firstValue: " + firstValue)
            console.log("previousInputs.value: " + previousInputs.value)
            console.log("current operation: " + currentOperation)
            operate(firstValue, previousInputs.value, currentOperation)
            previousInputs.textContent = ''
            return
        }

        previousInputs.textContent = `${firstValue} +`
        previousInputs.value = firstValue
        console.log(previousInputs.value);
        clear()
        currentOperation = 'addition'
    })
    
    subtractButton.addEventListener('click', () => {
        firstValue = displayValue.textContent
        previousInputs.textContent = `${firstValue} -`
        clear()
        currentOperation = 'subtraction'
    })
    
    multiplyButton.addEventListener('click', () => {
        firstValue = displayValue.textContent
        previousInputs.textContent = `${firstValue} *`
        clear()
        currentOperation = 'multiplication'
    })
    
    divideButton.addEventListener('click', () => {
        firstValue = displayValue.textContent
        previousInputs.textContent = `${firstValue} /`
        clear()
        currentOperation = 'division'
    })
    return firstValue
}


