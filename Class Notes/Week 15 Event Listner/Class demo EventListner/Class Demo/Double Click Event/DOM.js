// Event Listeners
// selectedElement.addEventListener('eventlistner', function(e) {
//     // the activity you want to occur after the event will be in here
//   })
//   // or
  
//   selectedElement.addEventListener('eventlistner', e => {
//     // the activity you want to occur after the event will be in here
//   })


// Double Click
// document.getElementById("demo")
let demo = document.getElementById("demo")
demo.addEventListener("dblclick", myFunction)

function myFunction(){
    demo.textContent = "I was double clicked"
    console.log("This is double click")
};
