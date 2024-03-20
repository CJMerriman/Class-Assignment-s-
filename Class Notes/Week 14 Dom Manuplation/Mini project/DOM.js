// Create a div container on HTML document and create 100 to 100 numbers dynamically and append to the container div.
function isPrime(num) {
    if(num <= 1) return false;
    if(num <= 3) return true;
    if(num % 2 === 0 || num % 3 === 0) return false;
    let i = 5;
    while(i * i <= num) {
        if (num % i === 0 || num %(i + 2) === 0) return false;
        i += 6;
    }
    return true;
}
function generateNumber(){
  let container=document.querySelector(`.container`)
for(let i = 1; i <= 100; i++) {
    div = document.createElement("div")
    div.textContent=`${i}`
    div.className = "number"
    if(i % 2 === 0){
        div.style.backgroundColor="green"
      }else if(isPrime(i)){
        div.style.backgroundColor="red"
      }else{
        div.style.backgroundColor="yellow"
      }
      container.appendChild(div)
      console.log(div)
    }
}
generateNumber();

// Even numbers background is green



// Odd numbers background is yellow



// Prime numbers background is red



