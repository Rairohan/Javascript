let example1 = [1,2,3,4,5]
console.log(example1)
let example2 = [...example1,6,7]
console.log(example2)

let person = {
    name:"ram",age:24
}
let detail = {
   address:"ktm",id:1
}
let merge = {...person,...detail}
console.log(merge)

function add(a,b,c){
    return a+b+c
}
console.log(add(2,3,4))//either this or
const num =[2,3,4]
console.log(add(...num))//or this