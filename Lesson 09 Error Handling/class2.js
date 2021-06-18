// Throw Method
function add(a,b) {
    if (isNaN(a) || isNaN(b) && String(a) || String(b)) {
        throw "Plese add pure number"; // Coustom Error Message
    }
    return a + b;
};
try {
    let a = add(10,"77");
    console.log(a);
} catch (error) {
    console.log(error); // Calling Error 
};