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


    //CREATE A SET
// const numbers = new Set();

    // //ADD VALUES TO THE SET
// numbers.add(1);
// numbers.add(2);
// numbers.add(3)

// console.log(numbers)

    //CREATE A VARIABLES
// const a = "apples";
// const b = "ball";
// const c = "cat";
//     //CREATE A SET
// const things = new Set();
//     //SET VARIABLES TO THE SET
// things.add(a);
// things.add(b);
// things.add(c)

// console.log(things)

// function name(params) {
        //CREATE A SET
// const fruits = new Set(["Bananas", "blackberrys", "oranges"]);
//         //LIST ALL ELEMENTS
// let text = "";
// fruits.forEach (function(value) {
//         text += value + "<br>";
// }) 
// console.log(fruits) 
//     //DELETING AN ELEMENT 
// console.log(fruits.delete("blackberrys"))
// console.log(fruits.size)
// console.log(fruits.has("Bananas"))


//     //CREATE A SET
// const letters = now Set(["a", "b", "c"]);
//     //LIST ALL ELEMENTS
// let text = "";   
// for (const x of letters.values()) {
//     text += x + "<br>";
// } 
// console.log(text)

    //CREATING A UNION OG TWO SETS
// let a = [1, 2, 3, 4, 5]
// let a = [3, 4, 5, 6]
// let c = [...a, ...b]

// let A = new Set(a)
// let B = new Set(b)
// let C = new Set(c)

// let addNumbers = [13, 43, 21, 25, 2]

// let modNumbers = addNumbers.map(function(element) {
//     return element * 2
// }) 
// console.log(modNumbers)

 
// //  let text = `Is this 
// // all there 
// // is`;

// // let pattern = /^is/mi;
// // let result = text.match(pattern);

// // console.log(result)


// // const txt = `Python is the most beautiful language that a human begin has ever created. \ I recommend python for a first programming language`
// // console.log(matchReplaced)

// // matchReplaced = txt.replace(/Python|python/, `JavaScript`)
// // console.log(matchReplaced)

// // const txt = `%I a%m te%%a%%che%r% a%n%d %% I l%o%ve te%ach%ing.\ 
// // T%he%re i%s n%o%th%ing as m%ore r%ewarding a%s e%duc%at%i%ng a%n%d e%m%p%ow%er%ing \ 
// // p%e%o%ple.\
// // I fo%und te%a%ching m%ore f%u%ll-f%i%lling th%en any%th%ing i%n th%is w%o%r%l%d`
// // const matches = txt.replace(/%/g, '$')

// // console.log(matches)

// //Square Bracket
// const pattern = '[Aa]pple' // this square bracket means either A or a
// const txt = 'Apple and bananas are fruits. An old cliche says an apple a day keeps the docture away'
// const matches = txt.match(pattern)

// console.log(matches)

// const pattern = /[Aa]pple/g // this square bracket means either A or a
// const txt = 'Apple and bananas are fruits. An old cliche says an apple a day keeps the docture away'
// const matches = txt.match(pattern)

// console.log(matches)

// //Let's search for the word "banana"

// const pattern = /[Aa]pple|[Bb]anana/g // this square bracket means either A or a
// const txt = 'Apple and bananas are fruits. An old cliche says an apple a day keeps the docture away'
// const matches = txt.matches(pattern)

// console.log(matches)