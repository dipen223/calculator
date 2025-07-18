const buttons = document.querySelectorAll("button");
const clearBtn = document.querySelector(".clear");
const displayResult = document.getElementById("result");

const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

let operand1 = null;
let operator = null;
let operand2 = null;
let currentInput = "";
let errorOccurred = false;

const operate = (val1, val2, operator) => {
    if (operator === "+") return add(val1, val2);
    else if (operator === "-") return subtract(val1, val2);
    else if (operator === "X") return multiply(val1, val2);
    else if (operator === "/") {
        if (val2 === 0) {
            errorOccurred = true;
            return "Nice try, genius. Division by zero is still illegal in math.";
        }
        return divide(val1, val2);
    }
};

const displayPopulator = () => {
    const arrBtns = [...buttons];  
    arrBtns.forEach((btn) => {
        btn.addEventListener("click", () => {
            const btnVal = btn.innerText;

            
            if (errorOccurred && btnVal !== "Clear") return;

            if (!isNaN(btnVal)) {
                currentInput += btnVal;
                displayResult.innerText += btnVal;
            }

            
            else if (["+", "-", "/", "X"].includes(btnVal)) {
                if (operand1 !== null && operator !== null && currentInput !== "") {
                    operand2 = Number(currentInput);
                    const result = operate(operand1, operand2, operator);
                    operand1 = result;
                    displayResult.innerText = result + btnVal;
                } else if (currentInput !== "") {
                    operand1 = Number(currentInput);
                    displayResult.innerText += btnVal;
                } else {
                    return; 
                }
                operator = btnVal;
                currentInput = "";
            }

           
            else if (btnVal === "=") {
                if (operand1 !== null && operator !== null && currentInput !== "") {
                    operand2 = Number(currentInput);
                    const result = operate(operand1, operand2, operator);
                    displayResult.innerText = result;
                    currentInput = result.toString();
                    operand1 = null;
                    operand2 = null;
                }
            }
        });
    });
};

displayPopulator();

const clearDisplay = () => {
    displayResult.innerText = "";
    operand1 = null;
    operand2 = null;
    operator = null;
    currentInput = "";
    errorOccurred = false;
};

clearBtn.addEventListener("click", clearDisplay);
