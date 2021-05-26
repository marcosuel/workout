import { HourCounter, updateCounter } from "./components/HourCounter.js";
import { addButtonEventListener, insertRow } from "./components/AddButton.js";
import DataManager from "./util/DataManager.js";

let activities = DataManager.getActivityList();
updateCounter(activities);

activities.forEach((item) => {
  insertRow(item.id, item.tempo, item.tipo, item.data);
});

addButtonEventListener();

const table = document.querySelector("#activity-list");
table.after(HourCounter());
