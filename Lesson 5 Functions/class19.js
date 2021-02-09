//Function

//syntax
function name() {
    return "Mohammed";
}

let myName = name();
console.log(myName);

// Sum of two numbers 
function calc(num1,num2) { //num1 and num2 is parameters
    return num1 + num2;
}
console.log(calc(10,20)); // num1 = 10 and num2 = 20

function sum(n1,n2 = 10) { // n1 = 0
    return n1 + n2;
}

console.log(sum(10)); // n1 = 10