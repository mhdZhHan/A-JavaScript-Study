// Break & Continue

for (i=0;i<=10;i++) {
    if (i == 6) {
        break;
    };
    console.log(i);
}; // print 1 to 5

for (i=1;i<=15;i++) {
    if (i <= 5) {
        continue;
    };
    console.log(i);
}; // print 6 to 15