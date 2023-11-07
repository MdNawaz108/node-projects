#! user/bin /env node
import inquirer from "inquirer";

class Student {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}
class Person {
  students: Student[] = [];
  addStudent(obj: any) {
    this.students.push(obj);
  }
}
const person = new Person();
const programStart = async (persons: Person) => {
  do {
    console.log("welcome Guest");
    const res = await inquirer.prompt({
      type: "list",
      message: "to Whome you want to talk",
      choices: ["self", "student"],
      name: "select",
    });
    if (res.select == "self") {
      console.log("hello i am talking to myself");
      console.log("i am feeling good");
    }
    if (res.select == "student") {
      const ans = await inquirer.prompt({
        type: "input",
        name: "student",
        message: "enter name of student you want to talk",
      });
      const student = persons.students.find((val) => val.name == ans.student);
      if (!student) {
        const stName = new Student(ans.student);
        persons.addStudent(stName);
        console.log(`\nhello i am ${stName.name} and i am fine`);
        console.log(persons.students);
      }
      if (student) {
        console.log(
          `\nhello i am ${student.name} and i am fine what about you\n`
        );
        // console.log(persons.students);
      }
    }
  } while (true);
};

programStart(person);
