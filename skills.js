// function to covert Celsius
// to Fahrenheit
function cToF(celsius) {
  return (celsius * 9) / 5 + 32;
}

// Driver code
let celsius = 0;
let fahrenheit = cToF(celsius);
console.log(`${celsius} degree Celsius is equal to ${fahrenheit} degree Fahrenheit.`);
