#! usr/bin /env node
import chalk from "chalk";
import inquirer from "inquirer";
const apilink: string =
  "https://opentdb.com/api.php?amount=5&category=18&difficulty=easy&type=multiple";

let fetchData = async (data: string) => {
  let fetchquiz: any = await fetch(data);
  let respons = await fetchquiz.json();
  return respons.results;
};

let data = await fetchData(apilink);
let startQuiz = async () => {
  let score: number = 0;
  let uName = await inquirer.prompt({
    type: "input",
    name: "fName",
    message: "what is your name",
  });
  for (let i = 1; i < 5; i++) {
    let answers = [...data[i].incorrect_answers, data[i].correct_answer];
    let ans = await inquirer.prompt({
      type: "list",
      name: "quiz",
      message: data[i].question,
      choices: answers.map((val: any) => val),
    });
    if (ans.quiz == data[i].correct_answer) {
      ++score;
      console.log(chalk.bold.italic.yellow("correct"));
    } else {
      console.log(
        `correct answer is ${chalk.bold.italic.red(data[i].correct_answer)}`
      );
    }
  }
  console.log(
    `Dear ${chalk.green.bold(uName.fName)} your score is ${chalk.red.bold(
      score
    )} out of ${chalk.red.bold("5")}`
  );
};

startQuiz();
