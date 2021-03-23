// Switch Statement
let today = new Date().getDay();

const day = ()=> {
    switch(today) {
        case 0:
            return "Sunday";
            break;
        case 1:
            return "Monday";
            break;
        case 2:
            return "Tusday";
            break;
        case 3:
            return "Wednesday";
            break;
        case 4:
            return "Thursday";
            break;
        case 6:
            return "Friday";
        default:
            return "Day is not defined";           
    }
}

console.log(day());