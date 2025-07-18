const buttons = document.querySelectorAll("button");
const clearBtn = document.querySelector(".clear");
const displayResult = document.getElementById("result");

const add = (a, b) => {
    return a + b;
}

const subtract = (a, b) => {
    return a - b;

}

const multiply = (a, b) => {
    return a * b;


}

const divide = (a, b) => {
    return a / b;

}

let operand1 = null;
let operator = null;
let operand2 = null;
let currentInput = "";

const operate = (val1, val2, operator) => {
    //  write a code to check which operator has been passed
    if (operator === "+") {
        return add(val1, val2);

    }
    else if (operator === "-") {
        return subtract(val1, val2);
    }
    else if (operator === "X") {
        return multiply(val1, val2);
    }
    else if (operator === "/") {
        return divide(val1, val2);
    }


}


const displayPopulator = () => {

    const arrBtns = [...buttons];



    arrBtns.forEach((btn) => {
        btn.addEventListener("click", () => {
            const btnVal = btn.innerText;

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

                }
                else if(currentInput !== ""){
                    operand1 = Number(currentInput);
                    displayResult.innerText += btnVal;
                }
                else{
                    return;
                }
                operator = btnVal;
                currentInput = "";

            }
            else if (btnVal === "=") {
                operand2 = Number(currentInput);
                const result = operate(operand1, operand2, operator);
                displayResult.innerText = result;
                currentInput = result.toString();
                operand1 = null;
                operand2 = null;
            }


        });



    });

};

displayPopulator();



const clearDisplay = () => {
    displayResult.innerText = "";
    operand1 = null;
    operand2 = null;
    operator = "";
    currentInput = "";

}

clearBtn.addEventListener("click", clearDisplay);