// BOM Importent Browser Wind Objects (innerHeight and innerWidth)
let height = document.querySelector(".height")
let width = document.querySelector(".width");

const calc = ()=>{
    h = window.innerHeight;
    w = window.innerWidth;
    height.innerText = h;
    width.innerHTML = w;
};

window.onload = calc;
window.onresize = calc;