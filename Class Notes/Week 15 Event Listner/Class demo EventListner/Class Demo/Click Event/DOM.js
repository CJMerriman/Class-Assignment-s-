/////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////// Event Listeners//////////////////////////////////////////
// selectedElement.addEventListener('eventlistner', function(e) {
//     // the activity you want to occur after the event will be in here
//   })
//   // or
  
//   selectedElement.addEventListener('eventlistner', e => {
//     // the activity you want to occur after the event will be in here
//   })


// Click

let button=document.querySelector("button")
button.addEventListener("click", e =>{
    
    console.log("e gives the event listener e", e)
    
     console.log(e.target)

    })
function clickMe(e){
    alert("We can attach events on HTLM elements")
    console.log("e gives the event listener e", e)
   
}

