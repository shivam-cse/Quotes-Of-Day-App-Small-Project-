
let arrayOfQuotes = [
    {
       "author" : "Fran Lebowitz",
       "quotes" : "Think before you speak. Read before you think."
    },
    {
       "author" : "Walt Whitman",
       "quotes" : "Keep your face always toward the sunshine - and shadows will fall behind you."
    },
    {
       "author" : "Ralph Waldo Emerson",
       "quotes" : "Write it on your heart that every day is the best day in the year."
    },
    {
       "author" : "Thomas S. Monson",
       "quotes" : "The past is behind, learn from it. The future is ahead, prepare for it. The present is here, live it."
    },
    {
       "author" : "Muhammad Ali",
       "quotes" : "Don't count the days, make the days count."
    },
    {
       "author" : "James Dean",
       "quotes" : "Dream as if you will live forever; Live as if you will die today."
    },
    {
       "author" : "Selena Gomez",
       "quotes" : "Being yourself is all it takes. If you want to impress someone don't be someone else just be yourself."
    },
    {
       "author" : "Warren Buffett ",
       "quotes" : "The most important thing to do if you find yourself in a hole is to stop digging. "
    },
    {
       "author" : " Charles M. Schulz",
       "quotes" : "Never lie in bed at night asking yourself questions you can't answer "
    }
]


function randomSelector(arrayLenght){
   return Math.floor(Math.random() * arrayLenght);

}

function generateQuote(){
     
   let randomNumber = randomSelector(arrayOfQuotes.length);

   document.getElementById('quoteOutput').innerHTML = '"' + arrayOfQuotes[randomNumber].quotes + '"';
   document.getElementById('authorOutput').innerHTML = '" Author ~ ' + arrayOfQuotes[randomNumber].author + '"';
   document.getElementById('authorOutput').style.color = "blue";
   document.getElementById('quoteOutput').style.color = "green";

}