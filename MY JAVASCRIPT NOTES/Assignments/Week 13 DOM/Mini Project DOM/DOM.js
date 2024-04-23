// Develop the following application, use the following HTML elements to get started with. You will get the same code on starter folder. Apply all the styles and functionality using JavaScript only.

//// The year color is changing every 1 second
// Select the year element
const yearElement = document.getElementById('year');

// Define an array of colors
const colors = ['red', 'green', 'blue', 'yellow', 'orange', 'purple'];

let currentIndex = 0;

// Function to change the color of the year element every 1 second
function changeYearColor() {
    yearElement.style.color = colors[currentIndex];
    currentIndex = (currentIndex + 1) % colors.length;
}

// Call the changeYearColor function every 1 second
setInterval(changeYearColor, 1000);


//// The date and time background color is changing every on seconds
// Select the date and time element
const datetimeElement = document.getElementById('datetime');

// Define an array of background colors
const bgColors = ['#ffcccb', '#90ee90', '#87ceeb', '#ffa07a', '#f0e68c', '#dda0dd'];

let currentIndex = 0;

// Function to change the background color of the date and time element every second
function changeBackgroundColor() {
    datetimeElement.style.backgroundColor = bgColors[currentIndex];
    currentIndex = (currentIndex + 1) % bgColors.length;
}

// Call the changeBackgroundColor function every second
setInterval(changeBackgroundColor, 1000);


//// Completed challenge has background green

}


//// Ongoing challenge has background yellow


//// Coming challenges have background red

