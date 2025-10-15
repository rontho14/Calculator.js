function add(x, y) {
  if ((x + y) % 1 != 0) {
    const num = x + y;
    return parseFloat(num.toFixed(2));
  } else {
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
    case "X":
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
let clear = document.querySelector(".clear-key");
let remove = document.querySelector(".remove-key");
let state = 0;

clear.addEventListener("click", () => {
  content.innerText = "";
  firstOperand = "";
  secondOperand = "";
  currentOperation = null;
});

btn.forEach((button) => {
  button.addEventListener("click", () => {
    if ((state == 0)) {
      content.innerText += button.innerText;
    } else {
      content.innerText = "";
      state = 0;
      currentOperation = null;
      content.innerText += button.innerText;
    }
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

remove.addEventListener("click", () => {
  let secondOperand = content.innerText.slice(firstOperand.length + 1);
  if (currentOperation == null) {
    content.innerText = "";
  } else {
    if (secondOperand !== "") {
      secondOperand = "";
      content.innerText = firstOperand + currentOperation;
    } else {
      currentOperation = null;
      content.innerText = firstOperand;
    }
  }
});

equal.addEventListener("click", () => {
  let secondOperand = content.innerText.slice(firstOperand.length + 1);
  state = 1;
  if (
    firstOperand != null &&
    secondOperand != null &&
    currentOperation != null
  ) {
    content.innerText = operate(firstOperand, currentOperation, secondOperand);
  } else {
    content.innerText = "";
  }
});

// if operation key is pressed, loop stops
