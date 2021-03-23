// Collecting data from API
window.addEventListener("load", ()=>{
    let req = new XMLHttpRequest();
    req.open("GET","https://reqres.in/api/users");
    req.send();
    req.addEventListener("load", ()=>{
        // console.log(JSON.parse(req.response));
        let responseData = JSON.parse(req.response);
        let users = responseData.data;
        // console.log(users);
        users.forEach((user)=>{
            console.log(user);
        });
    });
});