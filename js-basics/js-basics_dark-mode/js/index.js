console.clear();

const bodyElement = document.querySelector('[data-js="body"]');
const darkBtnElement = document.querySelector('[data-js="dark-mode-button"]');
const lightBtnElement = document.querySelector('[data-js="light-mode-button"]');
const toggleBtn = document.querySelector('[data-js="toggle-button"]');
darkBtnElement.addEventListener("click", () => {
  bodyElement.classList.add("dark");
});
lightBtnElement.addEventListener("click", () => {
  bodyElement.classList.remove("dark");
});
toggleBtn.addEventListener("click", () => {
  bodyElement.classList.toggle("dark");
});
