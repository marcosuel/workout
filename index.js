const addButton = document.querySelector("[data-form-button]");

addButton.addEventListener("click", (event) => {
  event.preventDefault();
  const timeSpent = document.querySelector("[data-form-input]");
  const opt = document.querySelector("[data-form-opt]");
  const date = document.querySelector("[data-form-date]");

  console.log(`${timeSpent.value}, ${opt.value}, ${date.value}`);
});
