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

//This is my callback function
const myCallback = (n)  => {
    return n * 2
}
//This function will use the callback function above "myCallback"
function cube(myCallback, n) {
    return myCallback(n) * n
}
console.log(cube(myCallback, 7))