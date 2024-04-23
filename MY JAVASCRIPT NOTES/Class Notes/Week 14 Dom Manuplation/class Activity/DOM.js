// // ////////////////////////////DOM Manuplation Part 2///////////////////////////////////
// // Creating an Element
// //general syntax
document.createElement("tagname")

let title=document.createElement("h1")
//class atribute
title.className="First h1"
//style
title.style.fontFamily="cursive"
//adding content
title.textContent="DOM Manuplation week 2"
console.log(title)

////////////////////////////////////////////////////////////////////////////

let paragraph=document.createElement("p")
paragraph.id="First Paragraph"
paragraph.style.fontSize="12px"
paragraph.textContent="DOM Week 2"

// console.log(paragraph)
// Creating elements
for(let i=0;1<3;i++){
    title=document.createElement("h1")
    title.textContent=`This is header number ${i+1}`
    title.style.fontsize="24px"
    title.className="header class"
    title.id=`header ${i+1}`
    document.body.appendChild(title)
console.log(title)
}
// Appending child to a parent element
//general syntax
//document.body.appendChild("variable that is holding your element")
//document.body.appendChild(title)
// document.body.appendChild(paragraph)



// Removing a child element from a parent node
const ul=document.querySelector("ul")
const list=document.querySelectorAll("li")

for (const list of lists){
    ul.removeChild(list)
}



//////////////////////////////Class Activity See the Mini Project/////////////////////////