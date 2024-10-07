function getCelsius(fahrenheit) {
  return (fahrenheit-32) * (5/9)
};

console.log(getCelsius(32));
console.log(`The temperature is ${getCelsius(32)} \xB0C`);

function minMax  (numbers) {
  return(` { min: ${Math.min(...numbers)}, max: ${Math.max(...numbers)} }`)
}

console.log(minMax([1, 2, 3, 4, 5]));

(function(length, bredth){
  console.log("The area of rectange is ", length*bredth);
})(5, 2);
