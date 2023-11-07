#! /usr/bin/env node
import inquirer from "inquirer";

import { sum } from "./sum.js";
import { sub } from "./sub.js";
import { mul } from "./mul.js";
import { div } from "./div.js";

console.log("welcome to calculator");
console.log(` _____________________
|  _________________  |
| | Md Nawaz     0. | |
| |_________________| |
|  ___ ___ ___   ___  |
| | 7 | 8 | 9 | | + | |
| |___|___|___| |___| |
| | 4 | 5 | 6 | | - | |
| |___|___|___| |___| |
| | 1 | 2 | 3 | | x | |
| |___|___|___| |___| |
| | . | 0 | = | | / | |
| |___|___|___| |___| |
|_____________________|`);

let { num1, num2, operation } = await inquirer.prompt([
  {
    type: "number",
    name: "num1",
    message: "enter a number",
  },
  {
    type: "number",
    name: "num2",
    message: "enter a number",
  },
  {
    type: "list",
    name: "operation",
    choices: ["+", "-", "*", "/"],
    message: "select option",
  },
]);

if (operation === "+") {
  let a = sum(num1, num2);

  console.log(`Addition of ${num1} and ${num2} is ${a}`);
} else if (operation === "-") {
  console.log(`Substraction of ${num1} and ${num2} is ${sub(num1, num2)}`);
} else if (operation === "/") {
  console.log(`Division of ${num1} and ${num2} is ${div(num1, num2)}`);
} else {
  console.log(`Multiplication of ${num1} and ${num2} is ${mul(num1, num2)}`);
}

// function table() {
//   for (let i = 0; i < 11; i++) {
//     console.log(i * 5);
//   }
// }

// async function startloop() {
//   let again;
//   do {
//     table();
//     again = await inquirer.prompt([
//       {
//         type: "list",
//         name: "restart",
//         choices: ["yes", "no"],
//         message: "do you want to continue",
//       },
//     ]);
//   } while (again.restart === "yes" || again.restart === "y");
// }
// startloop();
