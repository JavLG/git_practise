const randIndex = (opts) => {
  return Math.floor(Math.random() * opts);
};

const myData = {
  thing: ["car", "house", "lawn", "bicycle", "project"],
  task: ["fixing", "detailing", "checking", "designing", "reviewing"],
  timeTo: ["8:00 am", "11:00 am", "5:00 pm", "11:00 pm", "12:00 pm"],
};

let renderMSG = (num) => {
  switch (num) {
    case 0:
      console.log(
        `Your ${myData.thing[randIndex(5)]} needs some ${
          myData.task[randIndex(5)]
        } at ${myData.timeTo[randIndex(5)]}`
      );
      break;
    case 1:
      console.log(
        `Maybe tomorrow at ${
          myData.timeTo[randIndex(5)]
        } you should give some ${myData.task[randIndex(5)]} to your ${
          myData.thing[randIndex(5)]
        }`
      );
      break;
    case 2:
      console.log(
        `${myData.thing[randIndex(5)]}'s available to use at ${
          myData.timeTo[randIndex(5)]
        } `
      );
      break;
    default:
      break;
  }
};

let myGame = () => {
  let numOfTasks;
  const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  readline.question(
    "Please input how many task you need to randomly generate.\n Your input: ",
    (choice) => {
      for (let i = 0; i < choice; i++) {
        renderMSG(randIndex(3));
      }
      readline.close();
    }
  );
};

myGame();
