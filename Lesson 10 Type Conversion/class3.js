// String to number

let x = "12";
let y = "15.99";
let z = "40 age";
let n = "How is it";

console.log(typeof parseInt(x));
console.log(typeof parseInt(y));
console.log(typeof parseInt(z));
console.log(parseInt(n)); // n is not a number

console.log(parseFloat(y)); // String to number with fractional part (decimal point)