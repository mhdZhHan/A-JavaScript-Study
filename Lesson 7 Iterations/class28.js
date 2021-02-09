// For In Loop

let student = {
    name: "Mohammed",
    age: "15",
    class: "10",
    division: "A",
};

for (x in student) {
    let str = x + ":"
    console.log(`${str}${student[x]}`);
} // Looping Object

let fruits = ["Apple","Orange","Grapes","Mango","Banana"];

for (f in fruits) {
    console.log(fruits[f]);
} // Looping array withot index