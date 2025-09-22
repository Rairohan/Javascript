let firstcard = 10
let secondcard = 11
let res = firstcard+secondcard
let hasblackjack = false


function draw(){
    if(res<=20)
{
    message ="No Blackjack,Draw a new card?"
    
}
else if(res===21)
{
    message ="BlackJack!!!!"
     hasblackjack = true
}
else
{
    message="you are out!"
}
console.log(hasblackjack)

document.getElementById("msg").textContent = message
document.getElementById("hand").innerHTML ="Your hand is:"+firstcard+","+secondcard
document.getElementById("sum").innerHTML = "Your sum is:"+res

}
