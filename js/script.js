// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
//document.getElementById('loadQuote').addEventListener("click", printQuote, false);
//will add later once other codes have been updated.

//quotes where JS selects at random
var quotes = [
	{quote: "I think the worst time to have a heart attack is during a game of charades.", 
	author: "Demetri Martin",
	citation: '',
	year: ''
	},
	{quote: "I love lamp.", 
	author: "Steve Carell", 
	citation: "Anchor Man",
	year: ''
	},
	{quote: "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful", 
	author: "Albert Schweitzer",
	citation:'',
	year:''
	},
	{quote: "The true measure of an individual is how he treats a person who can do him absolutely no good", 
	author: "Ann Landers",
	citation: '',
	year: '',
	},
	{quote: "Whenever you read a good book, it's like the author is right there, in the room, talking to you, which is why I don't like to read good books", 
	author: "Jack Handey", 
	citation: "Saturday Night Live", 
	year: "1995"
	},
	{quote: "I bet the sparrow looks at the parrot and thinks, yes, you can talk, but LISTEN TO YOURSELF!", 
	author: "Jack Handey", 
	citation: "Saturday Night Live", 
	year: "1995"
	}
];

// create code to randomly select quotes
function getRandomQuote () {
	randomQuote = Math.floor(Math.random()*quotes.length);
	returns
};