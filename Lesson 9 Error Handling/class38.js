//Try Catch method

try {
    myFunc();
}catch(error) {
    console.log("Functio is note defined"); // My message
    console.log(error.message); // Default message
    console.log(error.myFunc); // Undifined Fuction msg
    console.log(error); // Full error
};

// myFunc();
console.log("hello");
