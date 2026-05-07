// 🟢 Section 1: Variables

var a = 10;
a = 15;
console.log(a); // 15

let b = 20;
// let b = 30; // Error

const c = 50;
console.log(c); // 50

const x = 10;
// x = 20; // Error

var p = 5;
var p = 10;
console.log(p); // 10

let q = 25;
q = q + 10;
console.log(q); // 35

const r = 7;
console.log(r + 3); // 10

let a1 = 10;


// 🟢 Section 2: Console Methods

console.log("Normal Output");
console.warn("Warning Message");
console.error("Error Message");
console.clear();


// 🟢 Section 3: Data Types

let a2 = "hello";
console.log(typeof a2); // string

let b2 = 100;
console.log(typeof b2); // number

let c2 = false;
console.log(typeof c2); // boolean

let d;
console.log(d); // undefined

console.log(typeof null); // object

console.log(Number("25")); // 25


// 🟢 Section 4: Arrays

let fruits = ["apple", "banana", "orange"];

let arr1 = ["a","b","c"];
console.log(arr1[1]); // b

let arr2 = ["x","y","z"];
console.log(arr2[arr2.length - 1]); // z

console.log(arr2[0]);

let arr3 = ["apple","banana"];
console.log(arr3.length); // 2

arr3.push("orange");
console.log(arr3);


// 🟢 Section 5: Objects

let obj1 = {
  name: "Abi",
  age: 24
};

let obj2 = {name:"Naveen"};
console.log(obj2.name); // Naveen

let obj3 = {
  fruits: ["apple","banana"]
};

console.log(obj3.fruits[1]); // banana

console.log(obj3.fruits[obj3.fruits.length - 1]);


// 🟢 Section 6: Arithmetic Operators

console.log(5 + 3); // 8
console.log(10 % 3); // 1
console.log(2 ** 3); // 8
console.log(10 / 2); // 5


// 🟢 Section 7: Increment / Decrement

let a3 = 5;
a3++;
console.log(a3); // 6

let b3 = 5;
let c3 = b3++;
console.log(b3, c3); // 6 5

let x1 = 5;
let y1 = ++x1;
console.log(x1, y1); // 6 6

let m = 3;
let n = m--;
console.log(m, n); // 2 3


// 🟢 Section 8: Comparison & Logical

console.log(5 == "5"); // true
console.log(5 === "5"); // false
console.log(true && false || true); // true


// 🟢 Section 9: Ternary

5 > 3 ? console.log("Yes") : console.log("No");