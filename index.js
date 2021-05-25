import { addButtonEventListener, insertRow } from "./components/AddButton.js";
import DataManager from "./util/DataManager.js";

let activities = DataManager.getActivityList();

activities.forEach((item) => {
  insertRow(item.id, item.tempo, item.tipo, item.data);
});

addButtonEventListener();
