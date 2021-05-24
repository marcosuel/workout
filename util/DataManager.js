import { UpdateCounter } from "../components/HourCounter.js";
export default {
  updateActivityList: (newList) => {
    localStorage.setItem("activities", JSON.stringify(newList));
    UpdateCounter(newList);
  },
  getActivityList: () => {
    let localData = localStorage.getItem("activities");
    let activities = JSON.parse(localData);
    if (activities == null) activities = [];
    return activities;
  },
};
