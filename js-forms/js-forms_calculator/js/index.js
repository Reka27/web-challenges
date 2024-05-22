console.clear();

const form = document.querySelector('[data-js="form"]');
const resultOutput = document.querySelector('[data-js="result"]');

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  let result;
  formElements = event.target.elements;
  const a = Number(formElements.numberA.value);
  const b = Number(formElements.numberB.value);

  if (formElements.operator.value == "addition") {
    result = add(a, b);
  }
  if (formElements.operator.value == "subtraction") {
    result = subtract(a, b);
  }
  if (formElements.operator.value == "multiplication") {
    result = multiply(a, b);
  }
  if (formElements.operator.value == "division") {
    result = divide(a, b);
  }

  resultOutput.textContent = result;
});
