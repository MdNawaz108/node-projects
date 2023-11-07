#! usr/bin/env node
import inquirer from "inquirer";

let play = true;
async function guessingNumber() {
  while (play) {
    let randomNumber = Math.ceil(Math.random() * 2) + 1;
    let answer = await inquirer.prompt([
      {
        name: "uNumber",
        type: "number",
        message:
          "enter any number from 1 to 3 \t game is based on correct answers ",
      },
    ]);
    if (answer.uNumber === randomNumber) {
      console.log("you guess a right number");
    } else {
      console.log("try again");
      play = false;
    }
  }
}
guessingNumber();
