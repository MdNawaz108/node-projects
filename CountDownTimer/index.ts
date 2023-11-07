#! user/bin /env node
import { differenceInSeconds } from "date-fns";
import inquirer from "inquirer";
import InputPrompt from "inquirer/lib/prompts/input.js";
const res = await inquirer.prompt({
  type: "number",
  name: "userInput",
  message: "Enter Amount Of Seconds",
  validate: (input) => {
    if (isNaN(input)) {
      return "please enter a valid number";
    } else if (input > 60) {
      return "seconds must be in 60";
    } else {
      return true;
    }
  },
});
let input = res.userInput;
function startTime(valu: number) {
  const intTime = new Date().setSeconds(new Date().getSeconds() + valu);
  const intervalTime = new Date(intTime);

  setInterval(() => {
    const currentTime = new Date();
    const timeDiff = differenceInSeconds(intervalTime, currentTime);
    if (timeDiff <= 0) {
      console.log("time has Expired");
      process.exit();
    }
    const min = Math.floor((timeDiff % (3600 * 24)) / 3600);
    const sec = Math.floor(timeDiff % 60);
    console.log(
      `${min.toString().padStart(2, "0")}:${sec.toString().padStart(2, "0")}`
    );
  }, 1000);
}
startTime(input);
