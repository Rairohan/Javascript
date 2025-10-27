//profile card
//Create a function createProfile that takes an object with the following properties {name,age,country}
//Use destructuring to extract the values.
//Set a default parameter for country = "Unknown".
//Return a template literal string like:Hello, I'm John, 20 years old from Nepal.
//Test it with and without providing country.
let Profile ={
    name:"Rohan",
    age:21,
    country:"Nepal"
}
const{name,age,country}= Profile
function createProfile(name,age,country ="unknown"){
    console.log(`Hello, I'm ${name}, ${age} years old from ${country}.`)
}
createProfile("rohan",21)

//Array mixer
//Create two arrays:const arr1 = [1, 2, 3]; const arr2 = [4, 5, 6];
//Use the spread operator to combine them into one array
//Write an arrow function called sumAll(...nums) that:
// Takes a rest parameter (...nums)
// Uses a for...of loop to sum all numbers
// Returns the total sum
// Console log the result.
const arr1 = [1,2,3];
const arr2 = [4,5,6];
const finalarr = [...arr1, ...arr2];
console.log(finalarr);

let sumAll = (...nums) => {
    let total = 0;
    for (let num of nums) {
        total += num;
    }
    return total;
}

console.log(sumAll(...finalarr));  

