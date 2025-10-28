class Person {
    constructor(name,age){
        this.name =name;
        this.age=age;
    }

     greet(){
    console.log(`Hi my name is  ${this.name} and i am ${this.age} old`)
}
}

let person1 = new Person("rohan",22)
person1.greet()