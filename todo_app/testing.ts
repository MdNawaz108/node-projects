// let arr = ["boll", "piaic", "tanki"];
// // console.log(res);
// let arr2 = ["bilal", "tehsin"];
// let combine = arr.concat("saleem ", arr2);
// let res = arr.join(" ");
// console.log(combine);
/**
 * 
 * Generic Function
function genericFunc<anything>(parametr: anything): anything {
    return parametr;
}
genericFunc(true);

genericFunc({ name: "bilal", age: 67 });
*/
// Generator Function
/**
 * 
 function* gen() {
     yield "Ratanlal";
     yield "mohsin";
    }
    let autoGen = gen();
    console.log(autoGen.next());
*/

// let a = 3;
// let b = 4;
// let fn = () => {
//   console.log("hello world");
// };
// (a == 3 || b == 1) && fn();
/**
 let functionname=()=>returnType=
 function(parameter1:dataType,parameter2:dataType):returnType{
    ...conditions...
 }
 
 let functionanme: (param1: number, param2: number) => number = function (
     param1: number,
  param2: number
): number {
  return param1 + param2;
  // console.log(param1+param2);
};
console.log(functionanme(2, 3));
let fn: (param1: number, param2: number) => number;
fn = functionanme;
console.log(fn(2, 4));
//---------------------------------------------------------------------------
// map(()=>{})
let arr: number[] = [1, 2, 3];
let newArr = arr.map((parameter1, index, refArr) => {
  console.log(refArr);

  return parameter1 + 5;
});
// console.log("ariginal array", arr);
console.log("new array ", newArr);
//-------------------------------------------------------------------------------
let arr = [1, 2, 3, 4, 5];
arr.forEach((elem, index, refArr) => {
  console.log(index, " ", elem, " ", refArr);
});


  */
// function greeter(fn: (a: string) => void) {
//     fn("Hello, World");
// }

// function printToConsole(s: string) {
//   console.log(s);
// }

// greeter(printToConsole);
// function greeting(fn: (a: string) => void) {
//   fn(`hello `);
// }
// function printToScreen(s: string) {
//   console.log(s);
// }
// greeting(printToScreen);
// fn: (a: string) => void)

// Existing array of accounts
const newAccounts = [
  { id: 1, name: "ahmad" },
  { id: 2, name: "ali" },
];

// Object to add to the array
const accObj = { id: 3, name: "faisal" };

// Combining the existing array and the new object using the spread operator
const updatedAccounts = [...newAccounts, accObj];

// Printing the updated array
console.log(updatedAccounts);
