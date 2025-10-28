//Challenge 1 – Beginner (Template literals, let/const, arrow functions)
// let name = "rohan"
// const age =22
// let introduce = (name,age)=>{
//     console.log(`Hi my name is ${name} and i am ${age}yrs old`)
// }
// introduce("rohan",22)
//Challenge 2 – Intermediate (Destructuring, spread/rest operators, array methods)
// Step 1: Create the array
// const students = [
//   { name: "Alice", score: 85 },
//   { name: "Bob", score: 92 },
//   { name: "Charlie", score: 78 }
// ];

// // Step 2: Destructure first student
// const [firstStudent, ...restStudents] = students;

// // Step 3: Function to calculate average using rest parameter
// function getAverageScore(...studentsArray) {
//   // studentsArray will be an array of scores
//   const total = studentsArray.reduce((acc, score) => acc + score, 0);
//   return total / studentsArray.length;
// }

// // Step 4: Extract scores using spread operator
// const scores = students.map(student => student.score);
// const averageScore = getAverageScore(...scores);

// // Step 5: Log results
// console.log("First student:", firstStudent);
// console.log("Average score:", averageScore);
const numbers = [5,10,15,20]
function Sumstudents (...nums){
    let total = nums.reduce((acc,n)=>acc+n,0)
    console.log(total)
}
let Multstudents = (...num) =>{
 let total1 = num.reduce((acc,n1)=>acc*n1,1)
console.log(total1)
}
Sumstudents(...numbers)
Multstudents(...numbers)