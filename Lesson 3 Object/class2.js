//Object Dot & [] oprtations 
let student = {
    name : "Mohammed",
    class : 7,
    division : "A"
};

//1.View Object Values
console.log(student.name); // Call object value
          //OR
console.log(student["class"]); // Call object value

// Add new item
student.age = 12; //Add new item in object
console.log(student);
          //OR
student["id"] = "651"; //Add new item in object
console.log(student);