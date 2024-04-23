function isPrime(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false;
    for (let i = 5; i * i <= num; i += 6) {
      if (num % i === 0 || num % (i + 2) === 0) return false;
    }
    return true;
  }
  
  // Create a div container on HTML document Where every number can be appended to the container div.
  // Create an input element to accept any given number
  // Create a button container on HTML document to dynamically append to the container div.
  
  // Even numbers background is green
  // Odd numbers background is yellow
  // Prime numbers background is red
  let genButton = document.getElementById("genButton");
  //Create a function that generates the numbers based on the input filed
  const numberGenerator = () => {
    // Get the value from the input field with the id 'inputNumber'
    let inputNumber = document.getElementById("inputNumber").value;
    console.log(inputNumber);
    // Get the div container with the id 'numberContainer'
    const numberContainer = document.getElementById("numberContainer");
    // Clear the contents of the number container
    numberContainer.innerText = "";
  
    // Loop from 1 to the inputNumber
    for (let i = 1; i <= inputNumber; i++) {
      // Create a new div element
      const div = document.createElement("div");
      // Set the text content of the div to the current number (i)
      div.textContent = `${i}`;
      // Add the 'number' class to the div
      div.classList.add("number");
      // Check if the current number is even
      if (i % 2 === 0) {
        // Add the 'even' class to the div
        div.classList.add("even");
      } else {
        div.classList.add("odd");
      }
  
      if (isPrime(i)) {
      //Add the 'prime' class to the div
      div.classList.add("prime");
      }
      numberContainer.appendChild(div);
    }
  };
  numberGenerator();
  
  ////////////////////////////////////////////Challenge//////////////////////////////////
  //If you can come up with your own strategy to solve your code that is challenging enough