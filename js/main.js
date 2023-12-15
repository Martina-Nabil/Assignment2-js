


var quotes = [
    "“Be yourself; everyone else is already taken.”",
    "“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”",
    "“Be the change that you wish to see in the world.”",
    "“A friend is someone who knows all about you and still loves you.",
    "“Live as if you were to die tomorrow. Learn as if you were to live forever.”",
    "“Without music, life would be a mistake.”",
    "“I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.”",
    "“You only live once, but if you do it right, once is enough.”",
    "“A room without books is like a body without a soul.”",
    "“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”"

];




var quotesAuther = [
    "― Oscar Wilde",
    "― Bernard M. Baruch",
    "― Mahatma Gandhi",
    "― Elbert Hubbard",
    "― Mahatma Gandhi",
    "― Friedrich Nietzsche, Twilight of the Idols",
    "― Maya Angelou",
    "― Mae West",
    "― Marcus Tullius Cicero",
    "― Dr. Seuss"
];

var prevRandomNumber = -1;


function quotesChange(){

    var randomNumber = Math.floor(Math.random() * quotes.length) ;
        
            if(randomNumber=== prevRandomNumber){
                
               randomNumber = Math.floor(Math.random() * quotes.length) ;
            }
            // console.log(randomNumber)
            prevRandomNumber = randomNumber;
            var selectedQuote = quotes[randomNumber];
            var selectedAuther = quotesAuther[randomNumber];
            document.getElementById('outputQuote').innerHTML = selectedQuote;
            document.getElementById('outputAuther').innerHTML = selectedAuther;
}

