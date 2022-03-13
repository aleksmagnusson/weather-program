// Making the program from the function "calculateWeather" and it operates by the property string "validNumber".
function calculateWeater(validNumber) {
  // Enter any type of number in Kelvin degrees:
  validNumber = parseFloat(validNumber);
  // "document.getElementById" runs the Element Id you give in the HTML tags.
  // The innerHTML property sets or returns the HTML content (inner HTML) of an element.
  // "validNumber" is declared as parseFloat which means any type of number you put in the input field, index.html 20-26.

  // Kelvin => Celsius
  document.getElementById("outputCelcius").innerHTML = Math.trunc(
    validNumber - 273.15
  );

  // Kelvin => Fahrenheit
  document.getElementById("outputFahrenheit").innerHTML = Math.trunc(
    (validNumber - 273) * 1.8 + 32
  );

  // Kelvin => Newton
  document.getElementById("outputNewton").innerHTML = Math.trunc(
    (validNumber - 273) * (33 / 100)
  );
}

/*

--> PREVIOUS CODE <--

// This is the degreece in Kelvin. Declared as a constant.
const kelvin = 293;

// Celsius is 273 degreece less than Kelvin. Declared as a constant.
const celsius = kelvin - 273;

let newton = celsius * (33 / 100);
newton = Math.floor(newton);

// By calculating Fahrenheit we use the following formula below.
// Fahrenheit = Celsius * (9/5) + 32;
let fahrenheit = celsius * (9 / 5) + 32;

// By using Math.floor() when the results ends in decimals.
fahrenheit = Math.floor(fahrenheit);

console.log(`Kelvin is '293' degrees.`);
// Console.log the result of Fahrenheit in x degrees.
console.log(`The temperature is ${fahrenheit} degrees in Fahrenheit.`);
// Console.log the result of Kelvin in x degrees.
console.log(`The temperature is ${celsius} degrees in Celsius.`);
// Console.log the result of Newton in x degrees.
console.log(`The temperature is ${newton} degrees in Newton.`);
*/
