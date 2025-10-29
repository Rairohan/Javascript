// //Challenge 1 – Beginner (Template literals, let/const, arrow functions)
// let name = "rohan"
// const age =22
// let introduce = (name,age)=>{
//     console.log(`Hi my name is ${name} and i am ${age}yrs old`)
// }
// introduce("rohan",22)

// //challenge 2 - Beginner 
// const numbers = [5,10,15,20]
// function Sumstudents (...nums){
//     let total = nums.reduce((acc,n)=>acc+n,0)
//     console.log(total)
// }
// let Multstudents = (...num) =>{
//  let total1 = num.reduce((acc,n1)=>acc*n1,1)
// console.log(total1)
// }
// Sumstudents(...numbers)
// Multstudents(...numbers)

//Challenge 3
// const nums = [10, 25, 5, 60, 15];
// function FindMaxx(...numbers){
//     let max = numbers.reduce((acc,num)=>acc > num ? acc:num)
//     console.log(max)
// }
// FindMaxx(...nums)
 
//Challenge 4
//  const fruits = ["apple","banana","pear","orange"]
// function countchar(...items){
//     let totalcount = items.reduce((acc,items)=>acc+items.length,0)
//     console.log(totalcount)
// }
// countchar(...fruits)

//Challenge 5
const people = [
  { name: "Rohan", age: 22 },
  { name: "Alice", age: 25 },
  { name: "Bob", age: 20 }
];
function avgage(...peps){
    let Avgagebe = peps.reduce((acc,person)=>acc+person.age,0)
    let Real_avg = Avgagebe/peps.length
    console.log(Real_avg)
}
avgage(...people)