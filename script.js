const buttons = document.querySelectorAll('.btn');
buttons.forEach(button => {
    button.addEventListener('click', () => {
        console.log(button.textContent)
    })
})

const value = document.querySelector('.display-section span')

const operationButtons = document.querySelectorAll('.operation-btn')
operationButtons.forEach(button => {
    button.addEventListener('click', () => {
        console.log(button.textContent)
    })
})

function add(a,b) {
    return a + b;
}

function subtract(a,b) {
    return a - b;
}

function multiply(a,b) {
    return a * b;
}

function divide(a,b) {
    return a / b;
}

