//revision (objects and functions)
//create a person object that contains three values:name,age and country
//create a function logData() that uses the person objects

//creating an object for person
let person={
    name:"Rohan",
    age:22,
    country:"Nepal"
}
function logData(){
    let output = person.name+" is "+person.age+" yrs old and lives in "+person.country
    console.log(output)
}
logData()

//now for conditional statements
//if age is less than 6yrs old -> free
//6 to 17 -> child discount
//18 to 26 -> student discount
//27 to 66 -> full price
//over 66 ->senior citizen discount

let age = 70
if(age<6){
    console.log("free")
}
else if(age>=6 && age<18){
    console.log("child discount")
}
else if(age>18 && age<27){
    console.log("student discount")
}
else if(age>26 && age<67){
    console.log("full price")
}
else{
    console.log("senior citizen discount")
}

//loops
//print the given array in this particular format:
//top 5 largest countries
//- China
//- India
//- United States
//- Indonasia
//- Pakistan
let Countries = ["China","India","United States","Indonasia","Pakistan"]
for(i =0;i<Countries.length;i++){
    console.log("- "+Countries[i])
}
//push and pop method and shift and unshift
let LargeCountries = ["Tuvalu","India","United States","Indonasia","Monaco"]
LargeCountries.pop()
LargeCountries.push("Pakistan")
LargeCountries.shift()
LargeCountries.unshift("China")
console.log(LargeCountries)

//Logical Operators
//If it is friday the 13 then log out run!
let day= 31
let weekday = "Friday"
if(day == 13 && weekday=="Friday"){
   console.log("Run!")
}
else{
    console.log("have a great day!")
}

//Rock,Paper,Scissors

let hand =["Rock","Paper","Scissors"]
function Index(){
    let a = Math.floor(Math.random()*3)
    return hand[a]
}
console.log(Index())





