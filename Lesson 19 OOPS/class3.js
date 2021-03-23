// Constructor Function
class Home {
    constructor(color,rooms,doors,) {
        this.color = color;
        this.rooms = rooms;
        this.doors = doors;
    };

};

let home1 = new Home("Blue",3,7);
let home2 = new Home("Green",4,9);

console.log(home1.color);
console.log(home1.rooms);
console.log(home2.color);
console.log(home2.rooms);