// function multiple() {
//     let a = 5
//     let b = 9
//     let mul = a * b
//     console.log(mul)
// }
// multiple()


// function multiple(a, b) {
//     return a * b 
// }
// console.log(multiple(5, 9))

// function myname(firstName, lastName) {
//     return firstName + "" + lastName;
// }

// console.log(myname("Charlene", "Merriman"))

// for (let i = 10; i >= 0; i--){
//     console.log(i)
// }

// let n1 = 

// for (let i = 2; i <= n1; i += 2) {
//     console.log(i);
// }

//function that takes other function as a callback
// function cube(callback, n){
//     return callback(n) * n
// }

// //Example callback
// //define your callback function
// const addNum = (n) => {
//     return n + n
// }
// //difine the function that will use the callback
// function square(addNum, n) {
//     return addNum(n) + n
// }
// console.log

// //higher order functions return functions as a vaule
// //callback function
// const higherOrder = n => {
//     const doSomething = m => {
//         const doWhatEver = t => {
//         }
//         return doWhatEver
//     }
//     return doSomething
// }

// //This is my callback function
// const myCallback = (n)  => {
//     return n * 2
// }
// //This function will use the callback function above "myCallback"
// function cube(myCallback, n) {
//     return myCallback(n) * n
// }
// console.log(cube(myCallback, 7))

// // Define a callback function
// function double(number) {
//     return number * 2;
//   }
  
//   // Sample array
//   const numbers = [1, 2, 3, 4, 5];
  
//   // Using forEach method with the callback function
//   console.log("Using forEach:");
//   numbers.forEach(function(number) {
//     console.log(double(number));
//   });
  
//   // Define a custom map method
//   function myMap(array, callback) {
//     const newArray = [];
//     for (let i = 0; i < array.length; i++) {
//       newArray.push(callback(array[i]));
//     }
//     return newArray;
//   }
  
//   // Using myMap method with the callback function
//   console.log("\nUsing myMap:");
//   const doubledNumbers = myMap(numbers, double);
//   console.log(doubledNumbers);
  

// const numbers = [1, 3, 43, 42]
// numbers.forEach(mynumbers)
// //array.forEach(pass in callback function)

// function mynumbers(num) {
//     console.log(num)
//     //define callback function, pass in a paramater of num
// }

// //This is how you do an anonymons function
// function anonymonsFun() {
//     console.log("Hello my name is Charlene but everyone calls me Dimples")
// }

// console.log(anonymonsFun())

// const addNumbers = (a, b) => a + b
// console.log(addNumbers(2, 3))