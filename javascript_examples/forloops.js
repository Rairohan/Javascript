let funds =[1000,2000,3000]
let total = 0
for(const fund of funds){//mordern for of loop , here fund is each value in funds array
    total += fund //so on each iteration each value of funds which is fund is added and stored to total
}//you can't change the value its just for iteration
console.log(total)