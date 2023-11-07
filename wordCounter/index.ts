#! user/bin /env node
import inquirer from "inquirer";

const counter = (para: string) => para.replace(/\s/g, "").length;
//   let freeSpace = para.replace(/\s/g, "");
//   return freeSpace.length;

async function startWordCount(counter: (text: string) => number) {
  do {
    let paragraph = await inquirer.prompt([
      {
        type: "input",
        name: "para",
        message: "Write Paragraph to count words",
      },
    ]);
    console.log(counter(paragraph.para));
  } while (true);
}

startWordCount(counter);
