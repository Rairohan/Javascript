let course = {
    name:"javscript",
    time:"7hr",
    lesson:16,
    creator:"Rohan",
    isFree:true,
    tags:["javascript","html"],
    sayHello:function(){
        console.log("hello") 
    }

}
console.log(course.time)//prints out time only
console.log(course.tags[0])//prints out first item of array which is javascript
console.log(course.isFree)//prints out the boolean value of isFree 
course.sayHello()//calling the function or method inside object
