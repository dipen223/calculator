const buttons  = document.querySelectorAll("button");

const displayResult = document.getElementById("result");

const add = (a,b) => {
    return a + b;
}

const subtract = (a,b) => {
    return a-b;

}

const multiply = (a,b) => {
    return a * b;


}

const divide = (a,b) => {
    return a / b;

}

let operand1;
let operator1;
let operand2;

const operator  = (val1,val2,operator) => {

    add(val1,val2);

}


const displayPopulator = () =>{
const arrBtns = [...buttons];
arrBtns.forEach((btn) => {
    const btnVal = btn.innerText;
    btn.addEventListener("click",() => {
        displayResult.innerText += btnVal;
    })
})

}

displayPopulator();



const clearDisplay = () => {

}