let cards= []//array which stores card drawn
let res = 0//variable that holds total sum of cards that player has drawn
let hasblackjack = false//variable illustrating boolean 
let isAlive = false
let player = {
    name: "Rohan",
    chip: 100
}//object created
document.getElementById("player-id").textContent = player.name+ " :$ " +player.chip//capturing the html element by id 
// and textcontent sets or gets text only, here player.name simple access the object

function rendergame(){
    if(res<=20)//condition
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
    let random = Math.floor(Math.random()*13+1)//random is a variable where math methods which here math.floor floors the values
    //generated and math.random generates random number but from 0 to 1 so we extend the boundry by *13 so now it becomes 0-13 and
    //we use +1 so that it starts from 1-13 
    if(random > 10){
        return 10
    }
    else if( random === 1 )//triple (=) or === simple compares both data types and value
    {
        return 11
    }
    return random
}