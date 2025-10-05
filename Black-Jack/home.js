
let cards= []
let res = 0
let hasblackjack = false
let isAlive = false
let player = {
    name: "Rohan",
    chip: 100
}
document.getElementById("player-id").textContent = player.name+ " :$ " +player.chip

function rendergame(){
    if(res<=20)
{
    message ="No Blackjack,Draw a new card?"
    hasblackjack=false
    
}
else if(res===21)
{
    message ="BlackJack!!!!"
     hasblackjack = true
}
else    
{
    message="you are out!"
    hasblackjack=false
}


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
    if(hasblackjack===false && isAlive===true && res<21){
 let card = randomcard()
 res = res+card
 cards.push(card)
 rendergame()
}
}
function startgame(){
    if(isAlive===false){
    let firstcard = randomcard()
    let secondcard = randomcard()
    cards.push(firstcard)
    cards.push(secondcard)
    res = firstcard+secondcard
    rendergame()
    isAlive=true
    }
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