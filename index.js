import { AddButton, InsertRow } from "./components/AddButton.js";
import DataManager from "./util/DataManager.js";
import { HourCounter, UpdateCounter } from "./components/HourCounter.js";

let activities = DataManager.getActivityList();
UpdateCounter(activities);

activities.forEach((item) => {
  InsertRow(item.id, item.tempo, item.tipo, item.data);
});

AddButton();

const table = document.querySelector("#activity-list");
table.after(HourCounter());
