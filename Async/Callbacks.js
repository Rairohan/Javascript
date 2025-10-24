function one(call_two){
    console.log("step one")
    call_two();
}
function two(){
    console.log("step two")
}
one(two)
//example
function fname(callback){
    console.log("first name")
    callback();
}
function lname(){
    console.log("last name")
}
fname(lname)