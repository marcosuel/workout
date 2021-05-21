const addButton = document.querySelector("#form-button");

addButton.addEventListener("click", (event) => {
  event.preventDefault();
  const timeSpent = document.querySelector("#form-time");
  const activity = document.querySelector("#form-activity");
  const date = document.querySelector("#form-date");

  console.log(`${timeSpent.value}, ${activity.value}, ${date.value}`);
});
