export default {
    UpdateActivityList: (newList) => {
        localStorage.setItem("activities", JSON.stringify(newList));
    },
    getActivityList: () => {
        let localData = localStorage.getItem("activities");
        let activities = JSON.parse(localData);
        if (activities == null) activities = [];
        return activities;
    }
}