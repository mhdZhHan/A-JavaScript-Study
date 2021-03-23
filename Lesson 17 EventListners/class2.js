// removeEventListener (To Remove/Stop a event)
window.onload = ()=> {
    let box = document.querySelector(".box");
    let btn = document.querySelector("button");
    let h2 = document.querySelector("h2")

    randomNumber = ()=> {
        h2.innerText = Math.floor(Math.random()*11);
    };
    box.addEventListener("mouseover",randomNumber);
    btn.addEventListener("click",()=> {
        box.removeEventListener("mouseover",randomNumber);
    });
};