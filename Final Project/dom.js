function generatePassword() {
  // Prompt for password length
  let length = prompt("Enter password length (min 8, max 128):");

  // Validate password length
  if (length === null || length === "") {
    alert("Password length cannot be empty. Please enter a valid length.");
    return;
  }
  length = parseInt(length);
  if (isNaN(length) || length < 8 || length > 128) {
    alert("Invalid password length. Please enter a number between 8 and 128.");
    return;
  }

  // Prompt for character types
  let includeLowercase = confirm("Include lowercase letters?");
  let includeUppercase = confirm("Include uppercase letters?");
  let includeNumbers = confirm("Include numbers?");
  let includeSpecial = confirm("Include special characters?");

  // Validate at least one character type is selected
  if (!includeLowercase && !includeUppercase && !includeNumbers && !includeSpecial) {
    alert("At least one character type must be selected.");
    return;
  }

  // Generate password
  let charset = "";
  if (includeLowercase) charset += "abcdefghijklmnopqrstuvwxyz";
  if (includeUppercase) charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  if (includeNumbers) charset += "0123456789";
  if (includeSpecial) charset += "!@#$%^&*()_+";

  let password = "";
  for (let i = 0; i < length; i++) {
    let randomIndex = Math.floor(Math.random() * charset.length);
    password += charset[randomIndex];
  }

  // Display generated password
  alert("Generated Password: " + password);
}

// Event listener for the "Generate Password" button
document.getElementById("generate").addEventListener("click", generatePassword);
