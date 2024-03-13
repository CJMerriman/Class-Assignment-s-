// Create an index.html file and put four p elements as above: Get the first paragraph by using document.querySelector(tagname) and tag name
// Get the first paragraph using document.querySelector(tagname) and tag name
const firstParagraph = document.querySelector('p');
console.log(firstParagraph.textContent); // Output the text content of the first paragraph

// Get each of the the paragraph using document.querySelector('#id') and by their id
//const firstParagraph = document.querySelector('#firstParagraph');
const secondParagraph = document.querySelector('#secondParagraph');
const thirdParagraph = document.querySelector('#thirdParagraph');
const fourthParagraph = document.querySelector('#fourthParagraph');

console.log(firstParagraph.textContent); // Output the text content of the first paragraph
console.log(secondParagraph.textContent); 
console.log(thirdParagraph.textContent);
console.log(fourthParagraph.textContent); 

// Get all the p as nodeList using document.querySelectorAll(tagname) and by their tag name
const nodeList = document.querySelectorAll('P');
console.log(nodeList);

const paragraphs = document.querySelectorAll('p');
paragraphs.forEach(paragraph => {
    console.log(paragraph.textContent);
});
// Loop through the NodeList and output each paragraph's text content
         for(let i = 0; i < paragraphs.length; i++) {
            console.log(paragraphs[i].textContent);
        }
// Set a text content to paragraph the fourth paragraph,Fourth Paragraph
paragraphs[3].textContent = "Fourth Paragraph";

// Set id and class attribute for all the paragraphs using different attribute setting methods
// Method 1: Set id attribute using setAttribute()
paragraphs.forEach((paragraph, index)=>(paragraph.id))




const paragraphs = document.querySelectorAll('p');
paragraphs[0].setAttribute('id', 'firstParagraph');

// Method 2: Set class attribute using className property
paragraphs[1].className = 'second-paragraph';

// Method 3: Set id attribute directly
paragraphs[2].id = 'thirdParagraph';

// Method 4: Set class attribute using classList.add()
paragraphs[3].classList.add('fourth-paragraph');