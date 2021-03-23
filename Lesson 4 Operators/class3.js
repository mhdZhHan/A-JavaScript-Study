// Comparison Operators [==,===,<,>,<=,>=,!=]
let x = 10;
let x1 = "10";
let y = 15;

//1.== (equalto equalto)
console.log(x==x1); // check value only

//2. === (equalto equalto equalto)
console.log(x===x1); // check value with datatype (x is a number and x1 is string)

//3.< and > (lessthan and greaterthan )
console.log(x<y); // x lessthan y (it is true)
console.log(x>y); // x greaterthan y (it is false)

//4.<= (lessthan ro equalto)
console.log(x<x); // x lessthan x (10<10) it is false
console.log(x<=x); // x lessthan or equalto x (10<=10) it is true

//5. >= (greaterthan ro equalto))
console.log(y>y); // x greaterthan x (15>15) it is false
console.log(y>=y); // x greaterthan or equalto x (15>=15) it is true

//6. != (not equalto)
console.log(y!=x); //y is not equal to x (y=15 and x=10) so it is true
console.log(x!=x); // x is not equal to x. it is false statement x is equalto x
/*---------------------------------------------------------------------------*/ 

console.log(x1!==x1); 