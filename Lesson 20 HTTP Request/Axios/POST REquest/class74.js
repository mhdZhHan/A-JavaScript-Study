window.addEventListener("load",()=>{
    let form = document.querySelector("form");
    let formAction = form.getAttribute("action");
    form.addEventListener("submit",(event)=>{
        event.preventDefault();
        let email = document.querySelector("#id_email").value;
        let password = document.querySelector("#id_password").value;
        axios.post(formAction,{
            email,
            password,
        }).then((response)=>{
            console.log(response.data.token);
        })
    })
});

// EMAIL : eve.holt@reqres.in
// PASSWORD : cityslicka