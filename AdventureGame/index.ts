#! usr/bin /env node
import chalk from "chalk";
import inquirer from "inquirer";

class Player {
  name: string;
  fuel: number = 100;
  constructor(name: string) {
    this.name = name;
  }
  decreaseFuel() {
    let fuel = this.fuel - 25;
    this.fuel = fuel;
  }
  increaseFuel() {
    this.fuel = 100;
  }
}
class Opponent {
  name: string;
  fuel: number = 100;
  constructor(name: string) {
    this.name = name;
  }
  decreaseFuel() {
    let fuel = this.fuel - 25;
    this.fuel = fuel;
  }
}
let player = await inquirer.prompt({
  type: "input",
  name: "pName",
  message: "Please Enter Player Name",
});

let opponent = await inquirer.prompt({
  type: "list",
  name: "oppName",
  message: chalk.yellowBright("Please Enter Opponent Name"),

  choices: ["Army", "Mafias", "Politicians"],
});
let p1 = new Player(player.pName);
let opp = new Opponent(opponent.oppName);
do {
  if (opponent.oppName == "Army") {
    console.log(`${chalk.bold.green(p1.name)} VS ${chalk.bold.red(opp.name)}`);
    let ask = await inquirer.prompt({
      type: "list",
      name: "opt",
      message: "Please Select Options",

      choices: ["Drink", "Attack", "Run"],
    });
    if (ask.opt == "Attack") {
      let num = Math.floor(Math.random() * 2);
      if (num > 0) {
        p1.decreaseFuel();

        console.log(chalk.bold.green(`${p1.name} fuel is ${p1.fuel}`));
        console.log(chalk.bold.red(`${opp.name} fuel is ${opp.fuel}`));

        if (p1.fuel <= 0) {
          console.log(
            chalk.red.bold.italic(opp.name + " you loose try next time")
          );
          process.exit();
        }
      }

      if (num <= 0) {
        opp.decreaseFuel();

        console.log(chalk.bold.red(`${opp.name} fuel is ${opp.fuel}`));
        console.log(chalk.bold.green(`${p1.name} fuel is ${p1.fuel}`));
        if (opp.fuel <= 0) {
          console.log(
            chalk.green.bold.italic(p1.name + "you Win congradulations ")
          );
          process.exit();
        }
      }

      console.log("Attack");
    }
    if (ask.opt == "Drink") {
      p1.increaseFuel();
      console.log(
        chalk.bold.green(`you boosted Energy your fuel is ${p1.fuel}`)
      );
    }
    if (ask.opt == "Run") {
      console.log(chalk.red.bold.italic("you loose try next time"));
      process.exit();
    }
  }
  if (opponent.oppName == "Mafias") {
    console.log(`${chalk.bold.green(p1.name)} VS ${chalk.bold.red(opp.name)}`);
    let ask = await inquirer.prompt({
      type: "list",
      name: "opt",
      message: "Please Select Options",

      choices: ["Drink", "Attack", "Run"],
    });
    if (ask.opt == "Attack") {
      let num = Math.floor(Math.random() * 2);
      if (num > 0) {
        p1.decreaseFuel();

        console.log(chalk.bold.green(`${p1.name} fuel is ${p1.fuel}`));
        console.log(chalk.bold.red(`${opp.name} fuel is ${opp.fuel}`));

        if (p1.fuel <= 0) {
          console.log(
            chalk.red.bold.italic(opp.name + " you loose try next time")
          );
          process.exit();
        }
      }

      if (num <= 0) {
        opp.decreaseFuel();

        console.log(chalk.bold.red(`${opp.name} fuel is ${opp.fuel}`));
        console.log(chalk.bold.green(`${p1.name} fuel is ${p1.fuel}`));
        if (opp.fuel <= 0) {
          console.log(
            chalk.green.bold.italic(p1.name + "you Win congradulations ")
          );
          process.exit();
        }
      }

      console.log("Attack");
    }
    if (ask.opt == "Drink") {
      p1.increaseFuel();
      console.log(
        chalk.bold.green(`you boosted Energy your fuel is ${p1.fuel}`)
      );
    }
    if (ask.opt == "Run") {
      console.log(chalk.red.bold.italic("you loose try next time"));
      process.exit();
    }
  }

  if (opponent.oppName == "Politicians") {
    console.log(`${chalk.bold.green(p1.name)} VS ${chalk.bold.red(opp.name)}`);
    let ask = await inquirer.prompt({
      type: "list",
      name: "opt",
      message: "Please Select Options",

      choices: ["Drink", "Attack", "Run"],
    });
    if (ask.opt == "Attack") {
      let num = Math.floor(Math.random() * 2);
      if (num > 0) {
        p1.decreaseFuel();

        console.log(chalk.bold.green(`${p1.name} fuel is ${p1.fuel}`));
        console.log(chalk.bold.red(`${opp.name} fuel is ${opp.fuel}`));

        if (p1.fuel <= 0) {
          console.log(
            chalk.red.bold.italic(opp.name + " you loose try next time")
          );
          process.exit();
        }
      }

      if (num <= 0) {
        opp.decreaseFuel();

        console.log(chalk.bold.red(`${opp.name} fuel is ${opp.fuel}`));
        console.log(chalk.bold.green(`${p1.name} fuel is ${p1.fuel}`));
        if (opp.fuel <= 0) {
          console.log(
            chalk.green.bold.italic(p1.name + "you Win congradulations ")
          );
          process.exit();
        }
      }

      console.log("Attack");
    }
    if (ask.opt == "Drink") {
      p1.increaseFuel();
      console.log(
        chalk.bold.green(`you boosted Energy your fuel is ${p1.fuel}`)
      );
    }
    if (ask.opt == "Run") {
      console.log(chalk.red.bold.italic("you loose try next time"));
      process.exit();
    }
  }
} while (true);
