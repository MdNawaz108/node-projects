#! user/bin /env node
import inquirer from "inquirer";

let todoArr: string[] = [];

createTodo(todoArr);
async function createTodo(todo: string[]) {
  let Operation = await inquirer.prompt([
    {
      type: "list",
      name: "select",
      message: "Select an Operation \n",
      choices: ["Add", "Exit", "view", "Delete"],
    },
  ]);

  if (Operation.select == "Add") {
    insertTodo();
  } else if (Operation.select == "view") {
    viewTodo();
  } else if (Operation.select == "Delete") {
    delTodoItems();
  } else if (Operation.select == "Exit") {
    console.log("\t  ta ta by by");
  }
}
function viewTodo() {
  if (todoArr.length > 0) {
    for (const item of todoArr) {
      console.log(`\t`, item);
    }
  } else {
    console.log("\t no item in list to show ");
  }
  createTodo(todoArr);
}
async function insertTodo() {
  let insertInTodo = await inquirer.prompt([
    {
      type: "input",
      name: "addTodoItems",
      message: "Insert Items In List\t",
    },
  ]);
  todoArr.push(insertInTodo.addTodoItems);
  createTodo(todoArr);
}
async function delTodoItems() {
  if (todoArr.length > 0) {
    let deleteItem = await inquirer.prompt([
      {
        type: "list",
        name: "itemsToDel",
        message: "\t Select an item you want to delete",
        choices: todoArr.map((item) => item),
      },
    ]);
    let newTodos = todoArr.filter((val) => val !== deleteItem.itemsToDel);
    todoArr = [...newTodos];
    console.log(todoArr);
  } else {
    console.log("\nlist is already empty first add something \n ");
  }
  createTodo(todoArr);
}
