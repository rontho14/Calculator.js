function add(x, y) {
  if ((x + y) % 1 != 0) {
    const num = x + y;
    return parseFloat(num.toFixed(2));
  } else {
    console.log(typeof x);
    return parseInt(x + y);
  }
}

function subtract(x, y) {
  if ((x - y) % 1 != 0) {
    const num = x - y;
    return parseFloat(num.toFixed(2));
  } else {
    return parseInt(x - y);
  }
}

function multiply(x, y) {
  if ((x * y) % 1 != 0) {
    const num = x * y;
    return parseFloat(num.toFixed(2));
  } else {
    return parseInt(x * y);
  }
}

function divide(x, y) {
  if ((x / y) % 1 != 0) {
    const num = x / y;
    return parseFloat(num.toFixed(2));
  } else {
    return parseInt(x / y);
  }
}

function operate(x, operator, y) {
  switch (operator) {
    case "+":
      return add(parseFloat(x), parseFloat(y));
    case "-":
      return subtract(parseFloat(x), parseFloat(y));
    case "x":
      return multiply(parseFloat(x), parseFloat(y));
    case "/":
      return divide(parseFloat(x), parseFloat(y));
  }
}

let content = document.querySelector(".result");
content.innerText = "";
let btn = document.querySelectorAll(".number-key");
let operators = document.querySelectorAll(".operation-key");
let currentOperation = null;
let firstOperand = "";

let equal = document.querySelector(".equal-key");

btn.forEach((button) => {
  button.addEventListener("click", () => {
    content.innerText += button.innerText;
  });
});

operators.forEach((button) => {
  button.addEventListener("click", () => {
    if (currentOperation == null) {
      currentOperation = button.innerText;
      firstOperand = content.innerText;
      content.innerText += button.innerText;
    }
  });
});

equal.addEventListener("click", () => {
    let secondOperand = content.innerText.slice(firstOperand.length + 1);
    console.log(firstOperand);
    console.log(secondOperand)
    console.log(currentOperation)
  if (
    firstOperand != null &&
    secondOperand != null &&
    currentOperation != null
  ) {
    content.innerText = operate(
      firstOperand,
      currentOperation,
      secondOperand
    );
  } else {
    content.innerText = "";
  }
});

// if operation key is pressed, loop stops
