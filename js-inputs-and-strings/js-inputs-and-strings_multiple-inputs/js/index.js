/*

Important: Create a fork for each sub challenge!
Implement the following functionality:

1. On button click: The value of the first input field is copied into the second input field

2. On button click: The value of the first input field is copied in uppercase into the second input field

3. On button click: The values of the two input fields switch.

*/

const firstInput = document.querySelector("[data-js=first-input]");
const secondInput = document.querySelector("[data-js=second-input]");
const button = document.querySelector("[data-js=button]");

button.addEventListener("click", () => {
  const temp1 = firstInput.value;
  secondInput.value = firstInput.value.toUpperCase();
  const temp2 = secondInput.value;
  firstInput.value = temp2;
  secondInput.value = temp1;
});

/*button.addEventListener("click", () => {
  const temp1 = firstInput.value;
  secondInput.value = firstInput.value;
});*/

/*button.addEventListener("click", () => {
  secondInput.value = secondInput.value.toUpperCase();
  const temp2 = secondInput.value;
});*d

/*button.addEventListener("click", () => {
  firstInput.value = temp2;
  secondInput.value = temp1;
});*/
