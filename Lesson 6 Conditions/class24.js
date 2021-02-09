// else if condition
// 16 - 4pm
// 20 - 10pm
// 24 - 4am

const wish = (time)=> {
    if (time <= 12) {
        return "Good Morning";
    }else if (time > 12 && time <=16) {
        return "Good Afternoon";
    }else if (time > 16 && time <=20) {
        return "Good Evening";
    }
    else if (time > 20 && time <=24) {
        return "Good Night";
    }else {
        return "time is not defined"
    }
};

console.log(wish(10)); // 10am
console.log(wish(13)); // 13 - 1pm
console.log(wish(17)); // 17 - 5pm
console.log(wish(23)); // 23 - 1pm

console.log(wish(25));