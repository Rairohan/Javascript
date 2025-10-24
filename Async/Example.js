//Synchronous example
console.log("my")
console.log("name")
console.log("is")
console.log("Rohan")
console.log("Rai")
//Till here we have synchronous as output prints out one by one 
//Asynchronous example
console.log("My")
console.log("name")
console.log("is")
setTimeout(()=>{//this is an arrow functions
    console.log("Rohan")
},4000)//setTimeout is a inbuilt function,in simple words it sets time to some code like here console.log
      //works out after 4 sec(4000 mili sec)
console.log("Rai")