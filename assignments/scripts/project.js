/* IF/ELSE IF */

// Step 1: Declare and initialize a new variable to hold the current date
const today = new Date();

// Step 2: Declare another variable to hold the day of the week
let dayOfWeek;

// Step 3: Using the variable declared in Step 1, assign the value of the variable declared in Step 2 to the day of the week ( hint: getDay() )
dayOfWeek = today.getDay();

// Step 4: Declare a variable to hold a message that will be displayed
let message1;

// Step 5: Using an if statement, if the day of the week is a weekday (i.e. Monday - Friday), set the message variable to the string 'Hang in there!'
if (dayOfWeek >= 1 && dayOfWeek <= 5) {
    message1 = "Hang in there!";
}

// Step 6: Using an else statement, set the message variable to 'Woohoo!  It is the weekend!'
if (dayOfWeek >= 1 && dayOfWeek <= 5) {
    message1 = "Hang in there";
} else {
    message1 = "Woohoo! It is a weekend!";
}

/* SWITCH, CASE, BREAK */

// Step 1: Declare a new variable to hold another message
let message2;

// Step 2: Use switch, case and break to set the message variable to the day of the week as a string (e.g. Sunday, Monday, etc.) using the day of week variable declared in Step 2 above
switch (dayOfWeek) {
    case 0:
        message2 = "Sunday";
        break;
    case 1:
        message2 = "Monday";
        break;
    case 2:
        message2 = "Tuesday";
        break;
    case 3 :
        message2 = "Wednesday";
        break;
    case 4:
        message2 = "Thursday";
        break;
    case 5:
        message2 = "Friday";
        break;
    case 6:
        message2 = "Saturday";
        break;
    default:
        message2 = "Unknown - " + dayOfWeek;
        break;
}

/* OUTPUT */

// Step 1: Assign the value of the first message variable to the HTML element with an ID of message1
document.querySelector("#message1").textContent = message1;

// Step 2: Assign the value of the second message variable to the HTML element with an ID of message2
document.querySelector("#message2").textContent = message2;


/* Declare and initialize global variables */
const quotesDisplay = document.querySelector("#quotesDisplay");
let quotesList = [];

/* async displayQuotes Function */
function displayQuotes(quotes) {
    quotes.forEach(quote => {

        let article = document.createElement("article");
        article.setAttribute("class", "each-quote");

        let quotation = document.createElement("p");
        quotation.setAttribute("class", "quotePara");
        quotation.textContent = `"${quote.quoteContent}"`;
        
        let author = document.createElement("div");
        author.setAttribute("class", "quoteAuthor");
        author.textContent = `- ${quote.author}`;
        
        // append diffirent element as children
        article.appendChild(quotation);
        article.appendChild(author);
        quotesDisplay.appendChild(article);

        // create columns for the grid
        quotesDisplay.style.setProperty("grid-template-columns", "repeat(3, 1fr)");

        // create random colors for the backgrounds
        let colorRed = Math.floor(Math.random() * 256);
        let colorGreen = Math.floor(Math.random() * 256);
        let colorBlue = Math.floor(Math.random() * 256);
        article.style.backgroundColor = "rgb(" + colorRed + ", " + colorGreen + ", " + colorBlue + ")";

    });
}

// async function to get the quotes using fetch()
const getQuotes = async () => {
    const response = await fetch(
        "https://run.mocky.io/v3/1dcb0e0e-fe9f-4d34-92cc-8aa4011b0771")
    .then(response => response.json())
    .then(quotes => {
        quotesList = quotes;
        displayQuotes(quotesList);

    /* // return a promise
    displayQuotes(quotesData); */
    });
};

getQuotes(); 