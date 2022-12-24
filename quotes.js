const quotes = [
    {
        quote: "Today is your opportunity to build the tomorrow you want.",
        author: "Ken Poirot"
    },
    {
        quote: "When you have a dream, you've got to grab it and never let go.",
        author: "Carol Burnett"
    },
    {
        quote: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
        author: "Winston Churchill"
    },
    {
        quote: "You define your own life. Don't let other people write your script.",
        author: "Oprah Winfrey"
    },
    {
        quote: "Someone once told me to never dream. I said NEVER SAY NEVER",
        author: "Justin Bieber"
    }
]



let statement = document.getElementById('quote')
let person = document.getElementById('person')


function RandomQuote (){
   let Rando_Num =  Math.floor(Math.random()*quotes.length);
   console.log(`${quotes[Rando_Num].quote} ${quotes[Rando_Num].author}`)
   console.log(Rando_Num)
    
}



RandomQuote()