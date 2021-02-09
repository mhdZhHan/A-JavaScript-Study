// Dom Events 

// Onclick attribute
function changeTxt() {
    let btn = document.querySelector(".btn").style.color="red";
}

// Onclick function
let btn2 = document.querySelector(".btn2");
btn2.onclick = ()=> {
    btn2.style.background = "red"
}

// Hover 
let box = document.querySelector(".box");
box.onmouseover = ()=> {
    box.style.cssText = "background:green;padding:30px;color:#fff;"
}

