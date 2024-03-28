
/////////////////////////////////////Excersice////////////////////////////////
// Store you first name, last name, age, country, city in your browser localStorage.
// Define your information
var userInfo = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    country: "USA",
    city: "New York"
};
// Convert the userInfo object to a string
var userInfoString = JSON.stringify(userInfo);

// Store the userInfo string in localStorage
localStorage.setItem("userInfo", userInfoString);
// Retrieve userInfo string from localStorage
var storedUserInfoString = localStorage.getItem("userInfo");

// Convert the stored string back to an object
var storedUserInfo = JSON.parse(storedUserInfoString);

// Access the individual properties
var firstName = storedUserInfo.firstName;
var lastName = storedUserInfo.lastName;
var age = storedUserInfo.age;
var country = storedUserInfo.country;
var city = storedUserInfo.city;

// You can now use these variables as needed
console.log("First Name:", firstName);
console.log("Last Name:", lastName);
console.log("Age:", age);
console.log("Country:", country);
console.log("City:", city);





// Create a student object. The student object will have first name, last name, age, skills, country, enrolled keys and values for the keys. Store the student object in your browser localStorage.
// Define the student object
var student = {
    firstName: "Alice",
    lastName: "Smith",
    age: 20,
    skills: ["JavaScript", "HTML", "CSS"],
    country: "Canada",
    enrolled: true
};

// Convert the student object to a string
var studentString = JSON.stringify(student);

// Store the student string in localStorage
localStorage.setItem("student", studentString);

// Retrieve student string from localStorage
var storedStudentString = localStorage.getItem("student");

// Convert the stored string back to an object
var storedStudent = JSON.parse(storedStudentString);

// Access the individual properties
var firstName = storedStudent.firstName;
var lastName = storedStudent.lastName;
var age = storedStudent.age;
var skills = storedStudent.skills;
var country = storedStudent.country;
var enrolled = storedStudent.enrolled;

// You can now use these variables as needed
console.log("First Name:", firstName);
console.log("Last Name:", lastName);
console.log("Age:", age);
console.log("Skills:", skills);
console.log("Country:", country);
console.log("Enrolled:", enrolled);






// Create an object called personAccount. It has firstname, lastname, incomes, expenses properties and it has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance methods. Incomes is a set of incomes and its description and expenses is also a set of expenses and its description.
var personAccount = {
    firstName: "John",
    lastName: "Doe",
    incomes: [],
    expenses: [],
    
    // Method to calculate total income
    totalIncome: function() {
        let total = 0;
        for (let income of this.incomes) {
            total += income.amount;
        }
        return total;
    },
    
    // Method to calculate total expenses
    totalExpense: function() {
        let total = 0;
        for (let expense of this.expenses) {
            total += expense.amount;
        }
        return total;
    },
    
    // Method to get account information
    accountInfo: function() {
        return `Account Information for ${this.firstName} ${this.lastName}: \nTotal Income: ${this.totalIncome()} \nTotal Expense: ${this.totalExpense()} \nAccount Balance: ${this.accountBalance()}`;
    },
    
    // Method to add income
    addIncome: function(description, amount) {
        this.incomes.push({ description: description, amount: amount });
    },
    
    // Method to add expense
    addExpense: function(description, amount) {
        this.expenses.push({ description: description, amount: amount });
    },
    
    // Method to calculate account balance
    accountBalance: function() {
        return this.totalIncome() - this.totalExpense();
    }
};

// Example usage:
personAccount.addIncome("Salary", 3000);
personAccount.addIncome("Freelancing", 500);
personAccount.addExpense("Rent", 1000);
personAccount.addExpense("Groceries", 200);

console.log(personAccount.accountInfo());
