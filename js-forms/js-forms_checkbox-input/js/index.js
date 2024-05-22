console.clear();

const form = document.querySelector('[data-js="form"]');
const tosError = document.querySelector('[data-js="tos-error"]');
const tosCheckbox = document.querySelector('[data-js="tos"]');
const successMessage = document.querySelector('[data-js="success"]');

function hideSuccessMessage() {
  successMessage.setAttribute("hidden", "");
}

function showSuccessMessage() {
  successMessage.removeAttribute("hidden");
}
function hideTosError() {
  tosError.setAttribute("hidden", "");
}

function showTosError() {
  tosError.removeAttribute("hidden");
}
hideTosError();
hideSuccessMessage();

form.addEventListener("submit", (event) => {
  event.preventDefault();

  // --v-- write your code here --v--
  if (!tosCheckbox.checked) {
    showTosError();
    tosCheckbox.addEventListener("input", () => {
      if (tosCheckbox.checked) {
        hideTosError();
      } else {
        showTosError();
      }
    });
  } else {
    alert("Form submitted");
    showSuccessMessage();
  }
  // --^-- write your code here --^--
  event.target.reset();
  // eslint-disable-next-line no-alert
});
