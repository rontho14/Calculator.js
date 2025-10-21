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
  if (y === 0) {
    return "DONT DIVIDE BY ZERO BRO!";
  } else {
    if ((x / y) % 1 != 0) {
      const num = x / y;
      return parseFloat(num.toFixed(2));
    } else {
      return parseInt(x / y);
    }
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
let btn = document.querySelectorAll(".number-key");
let operators = document.querySelectorAll(".operation-key");
let sign = document.querySelector(".sign-key");
let currentOperation = null;
let firstOperand = "";
let equal = document.querySelector(".equal-key");
let clear = document.querySelector(".clear-key");
let remove = document.querySelector(".remove-key");
let decimal = document.querySelector(".decimal-key");
let state = 0;

clear.addEventListener("click", () => {
  content.innerText = "";
  firstOperand = "";
  secondOperand = "";
  currentOperation = null;
});

btn.forEach((button) => {
  button.addEventListener("click", () => {
    if (state == 0) {
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
      state = 0;
      currentOperation = button.innerText;
      firstOperand = content.innerText;
      content.innerText += button.innerText;
    } else if (currentOperation !== null && content.innerText != "") {
      let secondOperand = content.innerText.slice(firstOperand.length + 1);
      content.innerText = operate(
        firstOperand,
        currentOperation,
        secondOperand
      );
      secondOperand = "";
      currentOperation = button.innerText;
      firstOperand = content.innerText;
      content.innerText += button.innerText;
    }
  });
});

sign.addEventListener("click", () => {
  let int = parseFloat(content.innerText);
  int = 0 - int;
  content.innerText = `${int}`;
});

decimal.addEventListener("click", () => {
  let secondOperand = content.innerText.slice(firstOperand.length + 1);
  if (currentOperation == null && content.innerText.includes(".")) {
    alert("Can't add more decimals bro!");
  } else if (currentOperation !== null && secondOperand.includes(".")) {
    alert("Can't add more decimals bro!");
  } else {
    content.innerText += ".";
  }
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
    currentOperation = null;
  } else {
    content.innerText = "";
  }
});

// TODO: 
// 1. Prettify calculator! (HIGH)
// bug: add functionality to add - before the number to make it negative
// bug: when 2 operators are pressed without a number, NaN is shown
// bug: when +/- is pressed without a number, NaN
// 2. add bigInt support (medium)
// 4. add keyboard support (LOW)
