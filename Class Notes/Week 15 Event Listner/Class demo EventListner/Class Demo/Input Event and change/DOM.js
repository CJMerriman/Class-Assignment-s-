// Event Listeners
// selectedElement.addEventListener('eventlistner', function(e) {
//     // the activity you want to occur after the event will be in here
//   })
//   // or
  
//   selectedElement.addEventListener('eventlistner', e => {
//     // the activity you want to occur after the event will be in here
//   })

// Getting value from an input element
// input value
let mass = document.getElementById("mass")
let height = document.getElementById("height")
let button = document.getElementById("button")

let BMI 
button.addEventListener("click", () => {
    BMI = mass.value/height.value**2
    alert(`Your BMI is${BMI}`)
})
