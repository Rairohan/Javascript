//default parameters allows us to set a default value 
function greet(name = "guest"){
    console.log(`hello ${name}`)
}
greet("rohan")//passes name value as rohan
greet()//empty so default val becomes guest

function add(numArray=[1,2,3])
{
    let total = 0
    numArray.forEach((element)=>{
        total +=element
    })
    console.log(total)
}
add()