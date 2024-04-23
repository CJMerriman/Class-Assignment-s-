//////////////////////////////// HTML5 Web Storage////////////////////////////
// sessionStorage
// localStorage
//Cookies 
//https://www.youtube.com/watch?v=GihQAC1I39Q



// Use case of Web Storages
//////////////////////////////// HTML5 Web Storage Objects/////////////////////


// / Web Storage objects:

// localStorage - to display the localStorage object
// localStorage.clear() - to remove everything in the local storage
// localStorage.setItem() - to store data in the localStorage. It takes a key and a value parameters.
// localStorage.getItem() - to display data stored in the localStorage. It takes a key as a parameter.
// localStorage.removeItem() - to remove stored item form a localStorage. It takes key as a parameter.
// localStorage.key() - to display a data stored in a localStorage. It takes index as a parameter.
// Setting item to the localStorage
// Getting item from localStorage
// Clearing the localStorage

localStorage.setItem("firstName" , "Dimples");
 console.log(localStorage);
 
localStorage.setItem("lastName" , "Merriman");
 var firstName = localStorage.getItem("firstName");
 console.log(firstName);
//   localStorage.clear()
localStorage.removeItem("firstName");

//CREATING AN ARRAY OF FRUITS
const fruits = ['bananas', 'pinnapples', 'gauvas'];

//STRINGIFYING OR ASKING AN ARRAY INTO STRING FORMAT IN ORDER TO STORE INTO OUR LOCAL STORAGE
const fruitsJson = JSON.stringify(fruits, undefined, 3);

localStorage.setItem("fruits", fruitsJson);
//ALWAYS PUT KEY VARIABLIES IN ""

//get fruits item from our local storage but in a string forat
let fruitsData = localStorage.getItem("fruits");

//change array from string format to an actual array
const fruitsJsonparse = JSON.parse(fruitsData, underFined, 3);
console.log(fruitsJsonparse);
