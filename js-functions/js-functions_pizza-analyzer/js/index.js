console.clear();

const pizzaInput1 = document.querySelector('[data-js="pizza-input-1"]');
const pizza1 = document.querySelector('[data-js="pizza-1"]');
const pizzaInput2 = document.querySelector('[data-js="pizza-input-2"]');
const pizza2 = document.querySelector('[data-js="pizza-2"]');
const outputSection = document.querySelector('[data-js="output-section"]');

const output = document.querySelector('[data-js="output"]');

let pizzaSize1;
let pizzaSize2;
pizzaInput1.addEventListener("input", () => {
  // write your code here
  pizzaSize1 = pizzaInput1.value;
  updatePizzaDisplay(pizza1, pizzaSize1);
});

pizzaInput2.addEventListener("input", () => {
  // write your code here
  pizzaSize2 = pizzaInput2.value;
  updatePizzaDisplay(pizza2, pizzaSize2);
});

outputSection.addEventListener("click", () => {
  const outputNew = calculatePizzaGain(pizzaSize1, pizzaSize2);
  output.textContent = outputNew;
  updateOutputColor(pizzaSize1, pizzaSize2);
});

// Task 1
// define the function calculatePizzaGain here
function calculatePizzaGain(diameter1, diameter2) {
  const area1 = Math.PI * diameter1;
  const area2 = Math.PI * diameter2;
  const pizzaGain = Math.round(((area2 - area1) / area1) * 100);
  return pizzaGain;
}
// Task 2
// define the function updatePizzaDisplay here
function updatePizzaDisplay(pizza, pizzaSize) {
  let newSize = (pizzaSize / 24) * 100;
  pizza.style.width = newSize + "px";
}

// Task 3
// define the function updateOutputColor here
function updateOutputColor(size1, size2) {
  outputSection.style = "";
  if (size1 > size2) {
    outputSection.style.backgroundColor = "var(--red)";
  }
}
