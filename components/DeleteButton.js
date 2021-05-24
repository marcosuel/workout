import DataManager from "../util/DataManager.js";

const deleteItem = (event) => {
  let targetRow = event.target.parentElement.parentElement;
  let activityId = targetRow.children[0].value;
  targetRow.remove();

  let activities = DataManager.getActivityList();
  activities = activities.filter((element) => element.id != activityId);
  DataManager.UpdateActivityList(activities);
};

const DeleteButton = () => {
  const button = document.createElement("img");
  button.src = "./img/delete.png";
  button.classList.add("delete-button");
  button.addEventListener("click", deleteItem);
  return button;
};

export default DeleteButton;
