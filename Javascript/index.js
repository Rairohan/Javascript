let count = 0
function increment()
{
    count = count + 1
    document.getElementById("count-el").innerText = count
}    
function decrement()
{
    if(count != 0)
    {
        count -= 1
        document.getElementById("count-el").innerText = count
    }
}
function save()
{
    document.getElementById("prev-el").innerText +=  count + "-"
    count = 0
    document.getElementById("count-el").textContent = 0
}