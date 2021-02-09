window.addEventListener("load",()=>{
    let form = document.querySelector("form");
    let formAction = form.getAttribute("action");
    let formMethod = form.getAttribute("method");
    form.addEventListener("submit",(event)=>{
        event.preventDefault();
        let email = document.querySelector("#id_email").value;
        let password = document.querySelector("#id_password").value;
        fetch(formAction,{
            method: formMethod,
            body: JSON.stringify({
                email,
                password,
            }),
            headers: {
                "Content-Type":"application/json"
            }
        }).then((response)=>{
            return response.json()
        }).then((responseData)=>{
            console.log(responseData);
        }).catch((err)=>{
            console.log(err);
        })
    });
});

// EMAIL : eve.holt@reqres.in
// PASSWORD : cityslicka