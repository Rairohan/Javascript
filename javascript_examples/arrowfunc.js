//normal function
function greet(name){
    return  `Namaste! ${name}`
}
console.log(greet("rohan"))

//with arrow function
let Greet = (Sayhello)=>{
return `hello! ${Sayhello}`
}
console.log(Greet("rohan"))

//even shorter version 
let Sayhi = (name1)=> `Hi ${name1}`
console.log(Sayhi("Rohan"))

//addtion
let sum = (a,b)=> a+b
console.log(sum(1,2))