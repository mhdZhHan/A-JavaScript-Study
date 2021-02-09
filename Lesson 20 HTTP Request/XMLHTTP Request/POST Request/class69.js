// Create XMLHTTP POST Request
window.addEventListener("load", ()=>{
    let form = document.querySelector("form");
    let loginRequest = new XMLHttpRequest();
    loginRequest.open("POST","https://reqres.in/api/login");
    loginRequest.setRequestHeader("Content-Type","application/json")
    loginRequest.send(
        JSON.stringify({
            "email": "eve.holt@reqres.in",
            "password": "cityslicka"
        })
    );
});