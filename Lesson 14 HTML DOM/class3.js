// Event Object
let h1 = document.getElementById("heading");
h1.onclick = function (event) {
    let myName = event.target.textContent = "Mohammed";
    console.log(myName);
    // console.log(event.target.textContent);
}