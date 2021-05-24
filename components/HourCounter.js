let hours = 0;
const counter = document.createElement("h2");

counter.id = "counter";

const UpdateCounter = (activities) => {
  hours = activities.reduce((acc, obj) => { return (acc += parseInt(obj.tempo)) }, 0);
  counter.innerText = `${hours} hora(s) de atividades`;
};

const HourCounter = () => {
  return counter;
};

export { HourCounter, UpdateCounter };
