let firstcard = 10
let secondcard = 9
let res = firstcard+secondcard
let hasblackjack = false


function rendergame(){
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

function newcard()
{
 let card = 2
 res = res+card
 rendergame()
}
function startgame(){
    rendergame()
}