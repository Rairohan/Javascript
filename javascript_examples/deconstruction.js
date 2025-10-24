const personalinfo ={
    firstname:"rohan",
    secondname: "rai",
    address:"ktm",
    phonenum:"1234567890"
}
console.log(personalinfo.firstname)//either we can access it like this or
const {firstname,secondname}=personalinfo;
console.log(firstname)//either this way 
//it also allows us to rename ps not resign value
const {firstname:fn,secondname:ln}=personalinfo;
console.log(`${fn} ${ln}`)