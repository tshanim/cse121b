/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add(number1, number2) {
    const sum = number1 + number2;
    return sum;
}

function addNumbers() {
    let addNumber1 = Number(document.querySelector("#add1").value);
    let addNumber2 = Number(document.querySelector("#add2").value);
    let result = add(addNumber1, addNumber2);
    document.querySelector("#sum").value = result;
}

document.querySelector("#addNumbers").addEventListener("click", addNumbers);

/* Function Expression - Subtract Numbers */

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
const multiply = (number1, number2) => number1 * number2;

const multiplyNumbers = () => {
    let factor1 = parseInt(document.querySelector("#factor1").value);
    let factor2 = parseInt(document.querySelector("#factor2").value);
    let result = multiply(factor1, factor2);
    document.querySelector("#product").value = result;
}

document.querySelector("#multiplyNumbers").addEventListener("click", multiplyNumbers);

/* Open Function Use - Divide Numbers */
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
const numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
document.querySelector("#array").textContent = numbersArray;

/* Output Odds Only Array */
document.querySelector("#odds").textContent = numbersArray.filter((number) => number % 2);

/* Output Evens Only Array */
document.querySelector("#evens").innerHTML = numbersArray.filter((number) => number % 2 === 0);

/* Output Sum of Org. Array */
document.querySelector("#sumOfArray").textContent = numbersArray.reduce((sum, number) => sum + number, 0);

/* Output Multiplied by 2 Array */
document.querySelector("#multiplied").textContent = numbersArray.map((number) => number * 2);

/* Output Sum of Multiplied by 2 Array */
document.querySelector("#sumOfMultiplied").textContent = numbersArray
.map((number) => number * 2)
.reduce((sum, number) => sum + number, 0);