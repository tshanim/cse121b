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
        quotation.textContent = '"' + quote.quoteContent + '"';
        
        let author = document.createElement("div");
        author.setAttribute("class", "quoteAuthor");
        author.textContent = '- ' + quote.author;
        
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