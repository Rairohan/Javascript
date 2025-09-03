//Initalizes the count variable to 0
let count = 0

//function for increment button when clicked
function increment()
{
    count = count + 1 //when clicked count is + 1 
    document.getElementById("count-el").innerText = count //document.getElementById("count-el") captures the
    //  element in html by id as given "counter-el" AND innertext inserts the text in that tag in here inserts count variable
}    
function decrement()
{
    if(count != 0)//implies if count is not equal to 0 in this program case it simply doesnt allow count to go negative
    {
        count -= 1 //Same as increment
        document.getElementById("count-el").innerText = count
    }
}
function save()
{
    document.getElementById("prev-el").innerText +=  count + "-" //captures prev-el id element and adds count and - to it
    count = 0 //when clicked save button it changes count to 0
    document.getElementById("count-el").textContent = 0 //captures count-el element and inserts 0 to it
}