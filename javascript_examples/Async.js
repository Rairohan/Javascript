const apiurl = "https://jsonplaceholder.typicode.com/users"//You’re storing the API endpoint URL in a variable.

// function getUsers(){
//     fetch(apiurl)//built-in browser function used to make HTTP requests.It starts loading data from the server at the given URL.
//     .then ((res)=>res.json())
//     //res is the Response object from the server.
//     //.json() is another asynchronous function that converts the response body (which is in text) into a JavaScript object or array.
//     .then ((json) =>{
//         //This second .then() runs when .json() finishes converting the data.
//         // json here is the array of users returned by the API.
//         // json[0] means “show me the first user” in that array.
//         console.log(json[0])
//     }).catch((error) =>{
//         console.log("failed to fetch")
//     });
// }
async function getUsers(){
    const response = await fetch(apiurl)
    const json = await response.json()

    console.log(json[0])
}
getUsers()
