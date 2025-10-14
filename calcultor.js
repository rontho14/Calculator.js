function add(x, y) {
    return x + y;
}

function subtract(x, y) {
    return x - y;
}

function multiply(x, y) {
    return x * y;
}

function divide(x, y) {
    return x / y;
}

function operate(x, operator, y) {
    switch (operator) {
        case "+":
            return add(x, y);
        case "-":
            return subtract(x, y);
        case "x": 
            return multiply(x, y);
        case "/":
            return divide(x, y);
    }
}


let content = document.querySelector(".result");
content.innerText = "";
let btn = document.querySelectorAll('.number-key');
console.log(btn)

for (let i =0 ; i < btn.length; i++) {
    btn[i].addEventListener('click', ()=>{
        content.innerText += btn[i].innerText;
    })
}
