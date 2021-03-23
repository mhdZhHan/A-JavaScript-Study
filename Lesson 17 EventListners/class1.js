// addEventListener
window.onload = () => {
  let btn = document.querySelector("button");
  let txt = document.querySelector("h2");
  let txt2 = document.querySelector("h3");

  btn.addEventListener("click", (event) => {
    console.log(btn);
    txt.innerHTML = "Clicked"
  }); // Click event

  btn.addEventListener("mouseover", ()=> {
      txt.innerHTML = "Hover is Success"
  }); // hover event

  btn.addEventListener("focus", ()=> {
      txt2.innerHTML = "Focus Success"
  });
};
