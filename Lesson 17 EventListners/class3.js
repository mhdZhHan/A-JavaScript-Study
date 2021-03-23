// Event PreventDefault (To Stop default action in an element)
let a = document.querySelector("a");

a.addEventListener("click",(event)=> {
    event.preventDefault(); 
    console.log("Link is ded!!!");
});