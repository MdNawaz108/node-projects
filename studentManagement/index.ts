#! usr /bin /env node
class School {
  schoolName: string;
  students: Student[] = [];
  teachers: Teacher[] = [];

  addStudent(stdObj: Student) {
    this.students.push(stdObj);
  }
  constructor(name: string) {
    this.schoolName = name;
  }
  addTeacher(teachObj: Teacher) {
    this.teachers.push(teachObj);
  }
}
class Student {
  name: string;
  age: number;
  schoolName: string;
  constructor(sName: string, sAge: number, sSchoolName: string) {
    this.name = sName;
    this.age = sAge;
    this.schoolName = sSchoolName;
  }
}
class Teacher extends Student {}
const schl1 = new School("alpha");
const schl2 = new School("newstart");

let s1 = new Student("ahmad", 3, schl1.schoolName);
let s2 = new Student("hamid", 5, schl2.schoolName);
let s3 = new Student("ali", 9, schl1.schoolName);

let t1 = new Teacher("salman", 40, schl1.schoolName);
let t2 = new Teacher("farman", 45, schl2.schoolName);
let t3 = new Teacher("adeel", 38, schl1.schoolName);
//add student here
schl1.addStudent(s1);
schl2.addStudent(s2);
schl1.addStudent(s1);
//add teacher here
schl1.addTeacher(t1);
schl2.addTeacher(t2);
schl1.addTeacher(t3);
console.log(schl1);
console.log(schl1);
console.log(schl2);
// console.log(t1);
// console.log(t2);
// console.log(t3);
// console.log(s1);
// console.log(s2);
// console.log(s3);
