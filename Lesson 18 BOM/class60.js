// BOM window.location importent properties (Get Current page details)
let currentLocation = window.location;
let url = window.location.href;
let hostname = window.location.hostname;
let pathname = window.location.pathname;
let protocol = window.location.protocol;

console.log(`Page Details: ${currentLocation}`);
console.log(`Site URL: ${url}`);
console.log(`Hostname: ${hostname}`);
console.log(`Pathname: ${pathname}`);
console.log(`Protocol: ${protocol}`);
/****************************************************************************/ 

let reload = document.querySelector(".reload");
let replace = document.querySelector(".replace");
let assign = document.querySelector(".assign");

reload.addEventListener("click", ()=>{
    location.reload(); // Reload current page
});

replace.addEventListener("click", ()=>{
    location.replace("https://github.com/MohammedShajahan7"); // Route a new page without forward option
});

assign.addEventListener("click", ()=>{
    location.assign("https://github.com/MohammedShajahan7"); // Route a new page with forward option
});