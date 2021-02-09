// Create XMLHTTP GET Request
window.addEventListener("load", ()=>{
    let req = new XMLHttpRequest();
    req.open("GET","https://reqres.in/api/users");
    req.send();
});