/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
// Step 1: Using function declaration, define a function named add that takes two arguments, number1 and number2
function add(number1, number2) {
    
    // Step 2: In the function, return the sum of the parameters number1 and number2
    const sum = number1 + number2;
    return sum;
}

// Step 3: Step 3: Using function declaration, define another function named addNumbers that gets the values of two HTML form controls with IDs of add1 and add2. Pass them to the add function
function addNumbers() {
    let addNumber1 = Number(document.querySelector("#add1").value);
    let addNumber2 = Number(document.querySelector("#add2").value);
    let result = add(addNumber1, addNumber2);

    // Step 4: Assign the return value to an HTML form element with an ID of sum
    document.querySelector("#sum").value = result;
}

// Step 5: Add a "click" event listener to the HTML button with an ID of addNumbers that calls the addNumbers function
document.querySelector("#addNumbers").addEventListener("click", addNumbers);

/* Function Expression - Subtract Numbers */
// Step 6: Using function expressions, repeat Steps 1-5 with new functions named subtract and subtractNumbers and HTML form controls with IDs of subtract1, subtrct2, difference and subtractNumbers
const subtract = function(number1, number2) {
    const difference = number1 - number2;
    return difference;
}

const subtractNumbers = function() {
    let subtract1 = Number(document.querySelector("#subtract1").value);
    let subtract2 = Number(document.querySelector("#subtract2").value);
    let result = subtract(subtract1, subtract2);
    document.querySelector("#difference").value = result;
}

document.querySelector("#subtractNumbers").addEventListener("click", subtractNumbers);

/* Arrow Function - Multiply Numbers */
// Step 7: Using arrow functions, repeat Steps 1-5 with new functions named multiply and mulitplyNumbers and HTML form controls with IDs of factor1, factor2, product and multiplyNumbers
const multiply = (number1, number2) => number1 * number2;

const multiplyNumbers = () => {
    let factor1 = parseInt(document.querySelector("#factor1").value);
    let factor2 = parseInt(document.querySelector("#factor2").value);
    let result = multiply(factor1, factor2);
    document.querySelector("#product").value = result;
}

document.querySelector("#multiplyNumbers").addEventListener("click", multiplyNumbers);

/* Open Function Use - Divide Numbers */
// Step 8: Using any of the three function declaration types, repeat Steps 1-5 with new functions named divide and divideNumbers and HTML form controls with IDs of dividend, divisor, quotient and divideNumbers
function divide(number1, number2) {
    const quotient = number1 / number2;
    return quotient;
}

function divideNumbers() {
    let dividend = parseInt(document.querySelector("#dividend").value);
    let divisor = parseInt(document.querySelector("#divisor").value);
    let result = divide(dividend, divisor);
    document.querySelector("#quotient").value = result;
}

document.querySelector("#divideNumbers").addEventListener("click", divideNumbers);

/* Decision Structure */
/* Add an event listener for the Get Total Due button when clicked that invokes the following functionality: */
// Step 1: Declare and instantiate a variable that stores the numeric value entered by the user in the subtotal field
// Step 2: Check IF the membership checkbox has been checked by the user to apply a 15% discount to the subtotal amount
// Step 3: Output the total to the the total span in the format shown with two decimals using a template string
const subtotal = document.querySelector("#subtotal");
const getTotal = document.querySelector("#getTotal");
const total = document.querySelector("#total");

function getTotalDue() {
  if (
      document.querySelector("#member").checked === true
    
  ) {
      let discount = Number((subtotal.value) - (subtotal.value * 0.15));
    total.innerHTML = "$ " + Number(discount).toFixed(2);
  } else  
 {
    total.innerHTML = "$" + Number(subtotal.value * 1).toFixed(2);
  }
}
getTotal.addEventListener("click", getTotalDue);

/* ARRAY METHODS - Functional Programming */
/* Output Source Array */
// Declare and instantiate an array variable to hold the numbers 1 through 13
const numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

// Assign the value of the array variable to the HTML element with an ID of array.
document.querySelector("#array").textContent = numbersArray;

/* Output Odds Only Array */
// Step 3: Use the filter array method to find all of the odd numbers of the array variable and assign the reult to the HTML element with an ID of "odds" ( hint: % (modulus operartor) )
document.querySelector("#odds").textContent = numbersArray.filter((number) => number % 2);

/* Output Evens Only Array */
// Step 4: Use the filter array method to find all of the even numbers of the array variable and assign the result to the HTML element with an ID of "evens"
document.querySelector("#evens").innerHTML = numbersArray.filter((number) => number % 2 === 0);

/* Output Sum of Org. Array */
// Step 5: Use the reduce array method to sum the array variable elements and assign the result to the HTML element with an ID of "sumOfArray"
document.querySelector("#sumOfArray").textContent = numbersArray.reduce((sum, number) => sum + number, 0);

/* Output Multiplied by 2 Array */
// Step 6: Use the map array method to multiple each element in the array variable by 2 and assign the result to the HTML element with an ID of "multiplied"
document.querySelector("#multiplied").textContent = numbersArray.map((number) => number * 2);

/* Output Sum of Multiplied by 2 Array */
// Step 7: Use the map and reduce array methods to sum the array elements after multiplying each element by two. Assign the result to the HTML element with an ID of "sumOfMultiplied"
document.querySelector("#sumOfMultiplied").textContent = numbersArray
.map((number) => number * 2)
.reduce((sum, number) => sum + number, 0);