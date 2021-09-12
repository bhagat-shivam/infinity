

const quote = document.getElementById("quote");
const btn = document.getElementById("btn");



function getQuote()
{
    fetch("https://api.quotable.io/random")
    .then(Response => Response.json())
    .then(data => {
        quote.innerHTML = `"${data.content}"`;
    });
}