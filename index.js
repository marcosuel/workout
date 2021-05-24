import {AddButton, InsertRow} from "./components/AddButton.js";
import DataManager from './util/DataManager.js'

let activities = DataManager.getActivityList();

activities.forEach((item) => {
  InsertRow(item.id, item.tempo, item.tipo, item.data);
});

AddButton();
