const quotes = [
    {
        quote: "Today is your opportunity to build the tomorrow you want.",
        author: "Ken Poirot",
        background: "images/nature.jpg"
    },
    {
        quote: "When you have a dream, you've got to grab it and never let go.",
        author: "Carol Burnett",
        background: "images/Old_structure.jpg"

    },
    {
        quote: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
        author: "Winston Churchill",
        background: "images/Tower.jpg"
    },
    {
        quote: "You define your own life. Don't let other people write your script.",
        author: "Oprah Winfrey",
        background:"images/Bridge.jpg"
    },
    {
        quote: "Someone once told me to never dream. I said NEVER SAY NEVER",
        author: "Justin Bieber",
        background:"images/Baseball.jpg"
    }
]



let statement = document.getElementById('quote')
let person = document.getElementById('person')


function RandomQuote (){
   let Rando_Num =  Math.floor(Math.random()*quotes.length);
    document.body.style.backgroundImage= `url(${quotes[Rando_Num].background})`;
   statement.innerHTML=`${quotes[Rando_Num].quote}`;
   person.innerHTML=`- ${quotes[Rando_Num].author}`;

    
}



window.onload = RandomQuote;