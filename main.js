// declare constant variable to store temp in kelvin.
const kelvin = 293;

// subtract 273 from `kelvin` to convert to `celsius`.
var celsius = kelvin - 273;

// convert to fahrenheit  by using formula: celsius * (9/5) + 32. Round down using floor()
fahrenheit = Math.floor((celsius * (9/5) + 32));

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`)
