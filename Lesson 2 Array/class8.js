//5. Splice > Adding and removing in a particular index
let students = ["Tom","Jerry","MR Beem","Chotabeem","Mottu","Pattlu"];
console.log(students);

students.splice(1,3); // Splice to use removing array items in a particular index
console.log(students);

students.splice(1,0,"Hunny","Laly","Choocha"); // Splice to use adding array items in a particular index
console.log(students);