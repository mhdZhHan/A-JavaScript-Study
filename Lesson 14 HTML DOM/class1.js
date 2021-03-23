// JavaScript DOM (Document Object Model)

// 1. Select Element By ID
let heading = document.getElementById("demo");
console.log(heading); // Display id demo tag

// 2. Select Element Using CSS Selectors
let box = document.querySelectorAll("div.box h2");
console.log(box); // Display div.box > list of all h2

// 3. Select Element By ClassName
let fruit = document.getElementsByClassName("fruit");
console.log(fruit);

// 4. Finding Element By Tag Name
let h3 = document.getElementsByTagName("h3");
console.log(h3);
console.log(h3.item(0));