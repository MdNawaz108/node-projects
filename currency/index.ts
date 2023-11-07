#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";

let conversion = {
  PKR: {
    USD: 0.0036,
    GBP: 0.0029,
    PKR: 1,
  },

  GBP: {
    USD: 1.21,
    GBP: 1,
    PKR: 335.8,
  },
  USD: {
    USD: 1,
    GBP: 0.82,
    PKR: 276.88,
  },
};
let answer: {
  fName: "PKR" | "GBP" | "USD";
  sName: "PKR" | "GBP" | "USD";
  amount: number;
} = await inquirer.prompt([
  {
    type: "list",
    name: "fName",
    message: "select first country",
    choices: ["PKR", "GBP", "USD"],
  },
  {
    type: "list",
    name: "sName",
    message: "select second country",
    choices: ["PKR", "GBP", "USD"],
  },
  {
    type: "number",
    name: "amount",
    message: "enter the amount you want to convert",
  },
]);

const { fName, sName, amount } = answer;
if (fName && sName && amount) {
  let result = conversion[fName][sName] * amount;
  console.log(
    `your conversion from ${chalk.green.bold(fName)} to ${chalk.green.bold(
      sName
    )} is ${chalk.yellow.bold(result)}`
  );
} else {
  console.log("invalide inputs");
}
