import DeleteButton from "./DeleteButton.js";
import DataManager from "../util/DataManager.js";

const insertRow = (activityId, tempo, tipo, data) => {
  const tableBody = document.querySelector("#activity-list tbody");
  const newRow = document.createElement("tr");
  newRow.innerHTML = `
    <td>${tempo}h</td>
    <td>${tipo}</td>
    <td>${data}</td>
    `;

  newRow.setAttribute("data-activity-id", activityId);

  const td = document.createElement("td");
  td.appendChild(DeleteButton());
  newRow.appendChild(td);
  tableBody.appendChild(newRow);
};

const addItem = (event) => {
  event.preventDefault();
  let activities = DataManager.getActivityList();
  let id = 0;
  if (activities.length) id = activities[activities.length - 1].id + 1;

  const timeSpent = document.querySelector("#form-time");
  const activity = document.querySelector("#form-activity");
  const date = document.querySelector("#form-date");

  const tempo = timeSpent.value;
  const tipo = activity.value;
  const data = date.value;

  activities.push({ id, tempo, tipo, data });
  DataManager.updateActivityList(activities);

  insertRow(id, tempo, tipo, data);
  id++;
};

const addButtonEventListener = () => {
  const addButton = document.querySelector("#form-button");
  addButton.addEventListener("click", addItem);
  return addButton;
};

export { addButtonEventListener, insertRow };
