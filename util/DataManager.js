import { updateCounter } from "../components/HourCounter.js";

const LOCAL_STORAGE_KEY = "activities";

export default {
  updateActivityList: (newList) => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newList));
    updateCounter(newList);
  },
  getActivityList: () => {
    let localData = localStorage.getItem(LOCAL_STORAGE_KEY);
    let activities = JSON.parse(localData);
    return activities || [];
  },
};
