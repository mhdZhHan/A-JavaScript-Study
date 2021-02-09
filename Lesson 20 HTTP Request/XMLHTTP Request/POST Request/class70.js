// Trigger post request on form submission
window.addEventListener("load",()=>{
    let form = document.querySelector("form");
    let loginReq = new XMLHttpRequest();
    let formAction = form.getAttribute("action");
    let formMethod = form.getAttribute("method");
    form.addEventListener("submit",(event)=>{
        event.preventDefault() // Prevent the default action after the form submit
        loginReq.open(formMethod,formAction);
        loginReq.setRequestHeader("Content-Type","application/json")
        let email = document.querySelector("#id_email").value;
        let password = document.querySelector("#id_password").value;
        loginReq.send(
            JSON.stringify({
                email:email,
                password:password,
            })
        );
    });
    loginReq.onload = ()=>{
        console.log(loginReq.response);
    };
});
// EMAIL : eve.holt@reqres.in
// PASSWORD : cityslicka