let str = "rohan"//here rohan is 5 length
//basically if my str wants to of more than of what length it is i can either use padstart or padend
//which adds whatever num or string i want to front and back to match the length i want 
console.log(str.padStart(7,"*"))//since str is 5 length it need two more char to be 7 where i chose * to be added
console.log(str.padEnd(7,"*"))