// JSON.stringify(); (JavaScript Object into JSON)

let student = {
    name: "Mohammed",
    age: 17,
    class: 12,
    division: "A",
};

let jsonObj = JSON.stringify(student);

console.log(student); // Normal js object
console.log(jsonObj); // JSON Object