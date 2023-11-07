#! user/bin /env node
import inquirer from "inquirer";
import { faker } from "@faker-js/faker";

// requirements
// user data done
// atm machine done
// atm machine functions

interface User {
  id: number;
  pin: number;
  name: string;
  accountNumber: number;
  balance: number;
}

const createUser = () => {
  let users: User[] = [];
  for (let i = 0; i < 5; i++) {
    let user: User = {
      id: i,
      pin: 1000 + i,
      name: faker.person.fullName(),
      accountNumber: Math.floor(10000000 * Math.random() * 9000000),
      balance: 1000000 * i,
    };
    users.push(user);
  }
  return users;
};

const users = createUser();

// console.log(users);

const atmMachine = async (users: User[]) => {
  const response = await inquirer.prompt([
    {
      type: "number",
      name: "pin",
      message: "write pin code",
    },
  ]);
  const user = users.find((val) => val.pin == response.pin);

  if (user) {
    console.log(`welcome ${user.name}`);
    atmFunc(user);
    return;
  } else {
    console.log("invalid user pin");
  }
};
atmMachine(users);
const atmFunc = async (user: User) => {
  const ans = await inquirer.prompt([
    {
      type: "list",
      name: "select",
      choices: ["withdraw", "Balance", "Exit", "Deposit"],
      message: "what you want to do",
    },
  ]);
  // console.log(ans);
  if (ans.select == "withdraw") {
    const amt = await inquirer.prompt([
      {
        type: "number",
        message: "Enter amount",
        name: "rupee",
      },
    ]);
    if (amt.rupee > 25000) {
      return console.log("you can not withdraw more than 25000");
    } else {
      console.log(`Withdrow amount : ${amt.rupee}`);
      console.log(`Balance : ${user.balance - amt.rupee}`);
    }
  } else if (ans.select == "Balance") {
    console.log(`Balance :${user.balance}`);
    return;
  } else if (ans.select == "Deposit") {
    const amt = await inquirer.prompt([
      {
        type: "number",
        name: "rupee",
        message: "Enter Deposite amount",
      },
    ]);
    console.log(`Deposite Amount: ${amt.rupee}`);
    user.balance += amt.rupee;
    console.log(`After Depositing your current balance is ${user.balance}`);
    return;
  } else if (ans.select == "Exit") {
    console.log("thanks for using atm");

    return;
  }
};
