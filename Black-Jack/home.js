let firstcard = randomcard()
let secondcard = randomcard()
let cards= [firstcard,secondcard]
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
let CardEl=document.getElementById("hand")
CardEl.innerHTML ="Your cards are "
for(let i =0;i<cards.length;i++){
    CardEl.textContent +=cards[i]+" "
}
document.getElementById("sum").innerHTML = "Your sum is:"+res

}

function newcard()
{
 let card = randomcard()
 res = res+card
 cards.push(card)
 rendergame()
}
function startgame(){
    rendergame()
}
function randomcard(){
    let random = Math.floor(Math.random()*13+1)
    if(random > 10){
        return 10
    }
    else if( random ===1 )
    {
        return 11
    }
    return random
}