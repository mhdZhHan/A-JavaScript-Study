// Class Methods
class Home {
    color = "red";
    rooms = 3;
    doors = 5;
    open = ()=>{
        return "Opened";
    };
    close =()=>{
        return "Closed";
    };
    clean =()=>{
        return "Start Cleaning";
    };
};

let home1 = new Home();
let home2 = new Home();

console.log(home1.rooms);

console.log(home2.clean());