// Event Listeners
// selectedElement.addEventListener('eventlistner', function(e) {
//     // the activity you want to occur after the event will be in here
//   })
//   // or
  
//   selectedElement.addEventListener('eventlistner', e => {
//     // the activity you want to occur after the event will be in here
//   })


// Mouse enter

let hover = document.getElementById("demo")
hover.addEventListener("mouseenter", mouseEnter)
hover.addEventListener("mouseleave", mouseLeave)
function mouseEnter(){
    hover.style.color = "red"
}
function mouseLeave(){
    hover.style.color = "black"
}