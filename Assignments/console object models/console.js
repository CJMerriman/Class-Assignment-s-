// Display the countries array as a table
const countries =
    ["USA", "China", "India", "Brazil", "Pakistan"];

console.log("Index\tCountry");
for (let i = 0; i < countries.length; i++) {
    console.log(i + "\t" + countries[i]);
}
// Display the countries object as a table
const names = ['Kevin', 'Dimples', 'James', 'Jared', 'Carson']
console.table(names)
// Use console.group() to group logs
console.group(names)

