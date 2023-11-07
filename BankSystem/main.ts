#! user/bin /env node
import inquirer from "inquirer";
import { faker } from "@faker-js/faker";
import chalk from "chalk";
//customer class
class Customer {
  firstName: string;
  lastName: string;
  // gender:"Male"|"Female"|"Others";

  accNo: number;
  constructor(fName: string, lName: string, accNo: number) {
    this.firstName = fName;
    this.lastName = lName;
    this.accNo = accNo;
  }
}

class Bank {
  customer: Customer[] = [];
  account: BankAccount[] = [];

  addCustomer(obj: Customer) {
    this.customer.push(obj);
  }
  addAccountNumber(obj: BankAccount) {
    this.account.push(obj);
  }
  transaction(accObj: BankAccount) {
    let newAccounts = this.account.filter(
      (acc) => acc.accountNumber !== accObj.accountNumber
    );
    this.account = [...newAccounts, accObj];
  }
}

interface BankAccount {
  accountNumber: number;
  balance: number;
}

let meezanBank = new Bank();
// create Customer
for (let i = 1; i < 4; i++) {
  let fName = faker.person.firstName("male");
  let lName = faker.person.lastName("male");
  //   let nmbr = parseInt(faker.phone.number("3#########"));
  //   const customer = new Customer(fName, lName);
  const customer = new Customer(fName, lName, 1000 + i);
  meezanBank.addCustomer(customer);

  meezanBank.addAccountNumber({
    accountNumber: customer.accNo,
    balance: 1000 * i,
  });
}

//bank functionality
async function bankOperations(bank: Bank) {
  do {
    let service = await inquirer.prompt({
      type: "list",
      name: "select",
      message: "please select the service",
      choices: ["view Balance", "Cash Withdraw", "Cash Deposite", "Exit"],
    });
    // view balance
    if (service.select == "view Balance") {
      let res = await inquirer.prompt({
        type: "input",
        name: "num",
        message: "please enter your acc number",
      });
      let account = meezanBank.account.find(
        (acc) => acc.accountNumber == res.num
      );
      if (!account) {
        console.log(chalk.red.bgYellow("Invalid Acc num"));
      }
      if (account) {
        let name = meezanBank.customer.find(
          (acc) => acc.accNo == account?.accountNumber
        );
        console.log(
          chalk.green.visible(
            `${name?.firstName} your acc balance is ${chalk.bold.whiteBright(
              account.balance
            )} `
          )
        );
      }
    }
    if (service.select == "Cash Withdraw") {
      let res = await inquirer.prompt({
        type: "input",
        name: "num",
        message: "please enter your acc number",
      });
      let account = meezanBank.account.find(
        (acc) => acc.accountNumber == res.num
      );
      if (!account) {
        console.log(chalk.red.bgYellow("Invalid Acc num"));
      }
      if (account) {
        let ans = await inquirer.prompt({
          type: "number",
          name: "rupee",
          message: "please enter amount",
        });
        if (ans.rupee > account.balance) {
          console.log(chalk.red.bold("mojooda balance nakafi he"));
        } else {
          let newBalance = account.balance - ans.rupee;
          //Transaction methon
          bank.transaction({
            accountNumber: account.accountNumber,
            balance: newBalance,
          });
          console.log("your remaining balance is", newBalance);
        }
      }
    }
    if (service.select == "Cash Deposite") {
      let res = await inquirer.prompt({
        type: "input",
        name: "num",
        message: "please enter your acc number",
      });
      let account = meezanBank.account.find(
        (acc) => acc.accountNumber == res.num
      );
      if (!account) {
        console.log(chalk.red.bgYellow("Invalid Acc num"));
      }
      if (account) {
        let ans = await inquirer.prompt({
          type: "number",
          name: "rupee",
          message: "please enter amount",
        });

        let newBalance = account.balance + ans.rupee;
        //Transaction methon
        bank.transaction({
          accountNumber: account.accountNumber,
          balance: newBalance,
        });
        console.log("your current balance is", newBalance);
      }
    }
    if (service.select == "Exit") {
      return;
    }
  } while (true);
}

// console.log(meezanBank);

bankOperations(meezanBank);
