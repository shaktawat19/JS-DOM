let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');


const quotes = [{
    quote: "Hey",
    person: "somebody"
},
{
    quote: "Hey",
    person: "somebody"
},
{
    quote: "Hey",
    person: "somebody"
},
{
    quote: "Hey",
    person: "somebody"
},
{
    quote: "Hey",
    person: "somebody"
}];

btn.addEventListener('click', () =>{
    let random = Math.floor(Math.random() * quotes.length);
    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;
});
