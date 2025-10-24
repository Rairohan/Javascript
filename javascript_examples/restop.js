
function add(...nums){
    console.log(nums)
}
add(1,2,3)
 
function show(first,...others){
    console.log("first:",first)
    console.log("others:",...others)
}
show("rohan","ram","sita")

function sum(...num){
    return num.reduce((total,n)=>total+n)
}
console.log(sum(1,2,3))

