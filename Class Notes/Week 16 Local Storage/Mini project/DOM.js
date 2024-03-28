
///////////////////////////////////Attention!/////////////////////////////////////
//..........................This is one way of achiving the task.................. 
//..........................you have been assigned but not the o..................
//..........................nly way of doing it.Please challenge..................
//..........................yourself to come up with your own wa..................
//..........................y to solve this mini project.       ..................
//////////////////////////////////////////////////////////////////////////////////


//    Select the player form element by its ID and store it in a variable called playerForm.
var playerForm = document.getElementById("playerForm");
//    Select the leaderboard element by its ID and store it in a variable called leaderboard.
var leaderboard = document.getElementById("leaderboard");
//    Add an event listener to the playerForm for the 'submit' event.
// Select the playerForm element
var playerForm = document.getElementById("playerForm");

// Add an event listener for the 'submit' event
playerForm.addEventListener('submit', function(event) {
    // Prevent the default form submission behavior
    event.preventDefault();
    
    // Your code to handle the form submission goes here
    // For example, you can access form data, validate inputs, or submit data asynchronously
    
    // For demonstration purposes, let's log a message when the form is submitted
    console.log('Form submitted!');
});

//    Inside the submit event listener callback function:
//       Prevent the default form submission behavior using event.preventDefault().
//       Call the addPlayer() function to handle adding a new player.
// Select the playerForm element
var playerForm = document.getElementById("playerForm");

// Add an event listener for the 'submit' event
playerForm.addEventListener('submit', function(event) {
    // Prevent the default form submission behavior
    event.preventDefault();
    
    // Call the addPlayer() function to handle adding a new player
    addPlayer();
});

// Define the addPlayer function to handle adding a new player
function addPlayer() {
    // Your code to handle adding a new player goes here
    // For example, you can access form data and create a new player object
    
    // For demonstration purposes, let's log a message
    console.log('Adding a new player...');
}

//    Define the addPlayer() function:
//       Retrieve the input values for first name, last name, country, and score from the form inputs.
//       Create a new card element using document.createElement('div') and add the 'card' class to it.
//       Set the innerHTML of the card element to include the player's name, country, score, and buttons.
//       Append the card element to the leaderboard.
function addPlayer() {
    // Retrieve form inputs
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var country = document.getElementById("country").value;
    var score = document.getElementById("score").value;

    // Create a new card element
    var card = document.createElement('div');
    card.classList.add('card'); // Add the 'card' class to the card element

    // Set the innerHTML of the card element
    card.innerHTML = `
        <p>Name: ${firstName} ${lastName}</p>
        <p>Country: ${country}</p>
        <p>Score: ${score}</p>
        <button>Edit</button>
        <button>Delete</button>
    `;

    // Select the leaderboard element
    var leaderboard = document.getElementById("leaderboard");

    // Append the card element to the leaderboard
    leaderboard.appendChild(card);
}

//       Select the buttons within the card for adding score, subtracting score, and deleting the player.
//       Add event listeners to each button:
//           - Add an event listener to the 'Add 5 Points' button that calls updateScore() with 5 as an argument.
//           - Add an event listener to the 'Subtract 5 Points' button that calls updateScore() with -5 as an argument.
//           - Add an event listener to the 'Delete' button that removes the card element from the leaderboard.
function addPlayer() {
    // Retrieve form inputs
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var country = document.getElementById("country").value;
    var score = document.getElementById("score").value;

    // Create a new card element
    var card = document.createElement('div');
    card.classList.add('card'); // Add the 'card' class to the card element

    // Set the innerHTML of the card element
    card.innerHTML = `
        <p>Name: ${firstName} ${lastName}</p>
        <p>Country: ${country}</p>
        <p>Score: <span id="scoreValue">${score}</span></p>
        <button class="addScoreBtn">Add 5 Points</button>
        <button class="subtractScoreBtn">Subtract 5 Points</button>
        <button class="deletePlayerBtn">Delete</button>
    `;

    // Select the leaderboard element
    var leaderboard = document.getElementById("leaderboard");

    // Append the card element to the leaderboard
    leaderboard.appendChild(card);

    // Select buttons within the card for adding score, subtracting score, and deleting the player
    var addScoreButton = card.querySelector('.addScoreBtn');
    var subtractScoreButton = card.querySelector('.subtractScoreBtn');
    var deletePlayerButton = card.querySelector('.deletePlayerBtn');

    // Add event listeners to each button
    addScoreButton.addEventListener('click', function() {
        updateScore(5); // Call updateScore() with 5 as an argument
    });

    subtractScoreButton.addEventListener('click', function() {
        updateScore(-5); // Call updateScore() with -5 as an argument
    });

    deletePlayerButton.addEventListener('click', function() {
        // Remove the card element from the leaderboard
        leaderboard.removeChild(card);
    });
}

// Function to update the score
function updateScore(points) {
    var scoreElement = document.getElementById("scoreValue");
    var currentScore = parseInt(scoreElement.innerText); // Get current score and parse it as an integer
    var newScore = currentScore + points; // Calculate new score
    scoreElement.innerText = newScore; // Update the score displayed in the card
}

//       Define the updateScore() function:
//            Retrieve the current score value from the card's DOM.
//            Parse the current score value to an integer.
//            Update the current score value by adding or subtracting the specified points.
//            Update the displayed score value in the DOM with the new score value.
  // Function to update the score
function updateScore(points) {
    // Retrieve the current score value from the card's DOM
    var scoreElement = document.getElementById("scoreValue");
    
    // Parse the current score value to an integer
    var currentScore = parseInt(scoreElement.innerText);

    // Update the current score value by adding or subtracting the specified points
    var newScore = currentScore + points;

    // Update the displayed score value in the DOM with the new score value
    scoreElement.innerText = newScore;
}

