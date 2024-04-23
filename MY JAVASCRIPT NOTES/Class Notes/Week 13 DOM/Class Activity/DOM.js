// // Create an index.html file and put four p elements as above: Get the first paragraph by using document.querySelector(tagname) and tag name
// // Get the first paragraph using document.querySelector(tagname) and tag name
// const firstParagraph = document.querySelector('p');
// console.log(firstParagraph.textContent); // Output the text content of the first paragraph

// // Get each of the the paragraph using document.querySelector('#id') and by their id
// //const firstParagraph = document.querySelector('#firstParagraph');
// const secondParagraph = document.querySelector('#secondParagraph');
// const thirdParagraph = document.querySelector('#thirdParagraph');
// const fourthParagraph = document.querySelector('#fourthParagraph');

// console.log(firstParagraph.textContent); // Output the text content of the first paragraph
// console.log(secondParagraph.textContent); 
// console.log(thirdParagraph.textContent);
// console.log(fourthParagraph.textContent); 

// // Get all the p as nodeList using document.querySelectorAll(tagname) and by their tag name
// const nodeList = document.querySelectorAll('P');
// console.log(nodeList);

// const paragraphs = document.querySelectorAll('p');
// paragraphs.forEach(paragraph => {
//     console.log(paragraph.textContent);
// });
// // Loop through the NodeList and output each paragraph's text content
//          for(let i = 0; i < paragraphs.length; i++) {
//             console.log(paragraphs[i].textContent);
//         }
// // Set a text content to paragraph the fourth paragraph,Fourth Paragraph
// paragraphs[3].textContent = "Fourth Paragraph";

// // Set id and class attribute for all the paragraphs using different attribute setting methods
// // Method 1: Set id attribute using setAttribute()
// paragraphs.forEach((paragraph, index)=>(paragraph.id))




// const paragraphs = document.querySelectorAll('p');
// paragraphs[0].setAttribute('id', 'firstParagraph');

// // Method 2: Set class attribute using className property
// paragraphs[1].className = 'second-paragraph';

// // Method 3: Set id attribute directly
// paragraphs[2].id = 'thirdParagraph';

// // Method 4: Set class attribute using classList.add()
// paragraphs[3].classList.add('fourth-paragraph');

// // Change style of each paragraph using JavaScript(eg. color, background, border, font-size, font-family)
//            // Get all paragraphs
//         const paragraphs = document.querySelectorAll('p');

//         // Loop through each paragraph and change its style
//         paragraphs.forEach((paragraph, index) => {
//             paragraph.style.color = getColor(index);
//             paragraph.style.backgroundColor = getBackgroundColor(index);
//             paragraph.style.border = '1px solid black';
//             paragraph.style.fontSize = (14 + index) + 'px';
//             paragraph.style.fontFamily = 'Arial, sans-serif';
//             paragraph.style.padding = '10px';
//             paragraph.style.margin = '5px';
//         });

//         // Function to get color based on index
//         function getColor(index) {
//             const colors = ['red', 'green', 'blue', 'orange'];
//             return colors[index % colors.length];
//         }

//         // Function to get background color based on index
//         function getBackgroundColor(index) {
//             const backgroundColors = ['lightyellow', 'lightgreen', 'lightblue', 'lightcoral'];
//             return backgroundColors[index % backgroundColors.length];
//         }

// // Select all paragraphs and loop through each elements and give the first and third paragraph a color of green, and the second and the fourth paragraph a red color
//  // Get all paragraphs
//  const paragraphs = document.querySelectorAll('p');

//  // Loop through each paragraph and apply colors
//  paragraphs.forEach((paragraph, index) => {
//      if (index % 2 === 0) {
//          // Even index: first and third paragraph
//          paragraph.style.color = 'green';
//      } else {
//          // Odd index: second and fourth paragraph
//          paragraph.style.color = 'red';
//      }
//  });

// ALL 3 QUESTION'S DONE TOGTHER 
// Get all paragraphs
const paragraphs = document.querySelectorAll('p');

// Loop through each paragraph
paragraphs.forEach((paragraph, index) => {
    // Set text content
    paragraph.textContent = `This is paragraph ${index + 1}`;

    // Set id attribute
    paragraph.id = `paragraph-${index + 1}`;

    // Set class attribute
    paragraph.classList.add('custom-class');

    // Set color based on index
    if (index % 2 === 0) {
        paragraph.style.color = 'green'; // First and third paragraph
    } else {
        paragraph.style.color = 'red'; // Second and fourth paragraph
    }

    // Additional styling
    paragraph.style.backgroundColor = 'lightgray';
    paragraph.style.border = '1px solid black';
    paragraph.style.fontSize = '16px';
    paragraph.style.fontFamily = 'Arial, sans-serif';
    paragraph.style.padding = '10px';
    paragraph.style.margin = '5px';
});
