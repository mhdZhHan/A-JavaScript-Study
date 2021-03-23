// Appending data to htmlpage
window.addEventListener("load", ()=>{
    let req = new XMLHttpRequest();
    req.open("GET","https://reqres.in/api/users");
    req.send();
    req.onload = ()=> {
    // console.log(req.response);
    let responseData = JSON.parse(req.response);
    // console.log(responseData);
    let users = responseData.data;
    // console.log(users);
    let parentUl = document.querySelector("#users ul");
    users.forEach((user)=>{
        console.log(user);
        let newChild = document.createElement("li"); // Get 6 li
        let innerHtml = `
        <img src="${user.avatar}" alt="${user.last_name}" />
        <div class="content">
            <h3>${user.first_name} ${user.last_name}</h3>
            <a href="mailto:${user.email}">${user.email}</a>
        </div>
        `
        newChild.innerHTML = innerHtml;
        parentUl.appendChild(newChild);
    });
};
    // Error Handiling
    req.onreadystatechange = ()=>{
        // console.log(req.readyState);
        if (req.readyState == 4) {
            // console.log(req.status);
            if (req.status !== 200) {
                console.log("Error Happend");
            }
        }
    };
    req.onerror = ()=> {
        console.log("Error");
    };
});