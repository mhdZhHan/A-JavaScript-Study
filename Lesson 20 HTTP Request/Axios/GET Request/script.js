window.addEventListener("load",()=>{
    axios.get("https://reqres.in/api/users").then((response)=>{
        let users = response.data.data;
        let parentUl = document.querySelector("#users ul");
        if (users) {
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
        }
    }).catch((err)=>{
        console.log(err);
    })
});