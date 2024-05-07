console.clear();

const operand1 = 12;
const operand2 = 4;

/*
Mathematical operations
*/
const addButton = document.querySelector('[data-js="add"]');
const subtractButton = document.querySelector('[data-js="subtract"]');
const multiplyButton = document.querySelector('[data-js="multiply"]');
const divideButton = document.querySelector('[data-js="divide"]');
const exponentButton = document.querySelector('[data-js="exponent"]');
const moduloButton = document.querySelector('[data-js="modulo"]');

addButton.addEventListener("click", () => {
  // 1. Add the two operands and store the result in a variable. Log the variable's value to the console.
  const additionResult = operand1 + operand2;
  console.log(operand1 + " + " + operand2 + " = ", additionResult);
});

subtractButton.addEventListener("click", () => {
  // 2. Subtract the two operands and store the result in a variable. Log the variable's value to the console.
  const subtractionResult = operand1 - operand2;
  console.log(operand1 + " - " + operand2 + " = ", subtractionResult);
});

multiplyButton.addEventListener("click", () => {
  // 3. Multiply the two operands and store the result in a variable. Log the variable's value to the console.
  const multiplicationResult = operand1 * operand2;
  console.log(operand1 + " x " + operand2 + " = ", multiplicationResult);
});

divideButton.addEventListener("click", () => {
  // 4. Divide the two operands and store the result in a variable. Log the variable's value to the console.
  const divisionResult = operand1 / operand2;
  console.log(operand1 + " / " + operand2 + " = ", divisionResult);
});

exponentButton.addEventListener("click", () => {
  // 5. Raise "operand1" to the value of "operand2" and store the result in a variable. Log the variable's value to the console.
  const exponResult = operand1 ** operand2;
  console.log(operand1 + " to the power of " + operand2 + " = ", exponResult);
});

moduloButton.addEventListener("click", () => {
  // 6. Calculate the remainder when dividing "operand1" by "operand2" and store the result in a variable. Log the variable's value to the console.
  const modResult = operand1 % operand2;
  console.log(operand1 + " % " + operand2 + " = ", modResult);
});

/*
Update the first operand

Please don't forget to think about the declaration of the variable "operand1".
*/

let newOperand1 = operand1;
const increaseByOneButton = document.querySelector(
  '[data-js="increase-by-one"]'
);

const increaseByFiveButton = document.querySelector(
  '[data-js="increase-by-five"]'
);

const decreaseByOneButton = document.querySelector(
  '[data-js="decrease-by-one"]'
);

const decreaseByFiveButton = document.querySelector(
  '[data-js="decrease-by-five"]'
);

const multiplyByTwoButton = document.querySelector(
  '[data-js="multiply-by-two"]'
);

const divideByTwoButton = document.querySelector('[data-js="divide-by-two"]');

increaseByOneButton.addEventListener("click", () => {
  // 7. Increase the value of "operand1" by 1. Log the new value to the console.
  const increaseByOne = newOperand1 + 1;
  console.log(newOperand1 + " increased by 1 = " + increaseByOne);
});

increaseByFiveButton.addEventListener("click", () => {
  // 8. Increase the value of "operand1" by 5. Log the new value to the console.
  const increaseByFive = newOperand1 + 5;
  console.log(newOperand1 + " increased by 5 = " + increaseByFive);
});

decreaseByOneButton.addEventListener("click", () => {
  // 7. Decrease the value of "operand1" by 1. Log the new value to the console.
  const decreaseByOne = newOperand1 - 1;
  console.log(newOperand1 + " decreased by 1 = " + decreaseByOne);
});

decreaseByFiveButton.addEventListener("click", () => {
  // 8. Decrease the value of "operand1" by 5. Log the new value to the console.
  const decreaseByFive = newOperand1 - 5;
  console.log(newOperand1 + " decreased by 5 = " + decreaseByFive);
});

multiplyByTwoButton.addEventListener("click", () => {
  // 11. Multiply the value of "operand1" by 2. Log the new value to the console.
  const multiplyByTwo = newOperand1 * 2;
  console.log(newOperand1 + " multiplied by 2 = " + multiplyByTwo);
});

divideByTwoButton.addEventListener("click", () => {
  // 12. Divide the value of "operand1" by 2. Log the new value to the console.
  const divideByTwo = newOperand1 / 2;
  console.log(newOperand1 + " divided by 2 = " + divideByTwo);
});
