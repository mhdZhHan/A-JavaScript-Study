// BOM window.history() Some properties 
let forward = document.querySelector(".forward");
let back = document.querySelector(".back");

forward.addEventListener("click", ()=>{
    history.forward(); // Same as clicking forward in the browser
});

back.addEventListener("click", ()=>{
    history.back(); // Same as clicking back in the browser
});