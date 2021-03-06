import DataManager from "../util/DataManager.js";

const deleteItem = (event) => {
  let targetRow = event.target.parentElement.parentElement;
  let activityId = targetRow.getAttribute("data-activity-id");
  targetRow.remove();

  let activities = DataManager.getActivityList();
  activities = activities.filter((element) => element.id != activityId);
  DataManager.updateActivityList(activities);
};

const DeleteButton = () => {
  const button = document.createElement("img");
  button.src = "./img/delete.png";
  button.classList.add("delete-button");
  button.addEventListener("click", deleteItem);
  return button;
};

export default DeleteButton;
