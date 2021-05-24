import DeleteButton from "./DeleteButton.js";
import DataManager from "../util/DataManager.js";

const InsertRow = (activityId, tempo, tipo, data) => {
  const tableBody = document.querySelector("[data-list] tbody");
  const newRow = document.createElement("tr");
  newRow.innerHTML = `
    <input type="hidden" id="activityId" value=${activityId}>
    <td>${tempo}h</td>
    <td>${tipo}</td>
    <td>${data}</td>
    `;

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

  const timeSpent = document.querySelector("[data-form-input]");
  const opt = document.querySelector("[data-form-opt]");
  const date = document.querySelector("[data-form-date]");

  const tempo = timeSpent.value;
  const tipo = opt.value;
  const data = date.value;

  activities.push({ id, tempo, tipo, data });
  DataManager.UpdateActivityList(activities);
  
  InsertRow(id, tempo, tipo, data);
  id++;
};

const AddButton = () => {
  const addButton = document.querySelector("[data-form-button]");
  addButton.addEventListener("click", addItem);
  return addButton;
};

export { AddButton, InsertRow };
