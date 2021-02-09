// Compare Date

let today = new Date();
let offer = new Date();

offer.setFullYear(2021,0,7);

console.log(today);
console.log(offer);

if (today < offer) {
    console.log("Offer Is Active");
}else {
    console.log("Offer is expired");
};