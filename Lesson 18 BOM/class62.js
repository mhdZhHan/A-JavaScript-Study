// Timing Events
let h2 = document.querySelector("h2");
let h3 = document.querySelector("h3");
let button = document.querySelector("button");
let btn = document.querySelector(".btn");
// 1. setTimeout()

let randomTimeout = setTimeout(()=>{
    h2.innerText = Math.floor(Math.random()*51);
    console.log(randomNumber);
},1000); // # second delay 

// 2. clearTimeout()

button.addEventListener("click",()=>{
    clearTimeout(randomTimeout); // Stop setTimeout() Function
});

// 3. setInterval()

let randomInterval = setInterval(()=>{
    h3.innerText = "Random Number" + Math.floor(Math.random()*51);
},1000);

// 4. clearInterval()

btn.addEventListener("click",()=>{
    clearInterval(randomInterval); // Stop setInterval() Function
});