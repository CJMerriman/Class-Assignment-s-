//A callback is a function which can be passed as a parameter to other function.  See the
//example 
//a callback function, the name of the function could be any name
// const callback = (n) => {
//     return n * 2
// }

// //function that takes other function as a callback
// function cube(callback, n) {
//     return callbaqck(n) * n
// }

//Practice 
///setting interval
// function sayHello() {
//     console.log("Hello")
// }
// setInterval(sayHello, 1000)

// function callback() {
//     ///code goes here
// }
// setInterval


// ///setting time using a set timeout
// //syntax
// function callback() {
//     //code goes here
// }

// function myName(){
//     console.log("Charlene")
// }
// setTimeout(myName, 2000)

// //forEach(callback)
// let fruits = ["apple", "orange", "banana", "coconut"];

// fruits.forEach(lowerCase);
// fruits.forEach(display);

// function upperCase(element, index, array){
//     array[index] = element.toUpperCase();
// }
// function lowerCaseCase(element, index, array){
//     array[index] = element.lowerCase();
// }
// function uppe(element, index, array){
//     array[index] = element.toUpperCase();
// }

// function display(element){ 
//     console.log(element);
// }

// // Define an Array ForEach Method "built in"
// const names = ['charlene', 'kevin', 'james', 'jared', 'carson']
// names.forEach((element) => console.log(element.toUpperCase()))