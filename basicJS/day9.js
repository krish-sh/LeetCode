// condition statement

// let age = 19;

// if (isNaN(age)) {
//   console.log("wrong input");
// } else if (age >= 18) {
//   console.log("You are a valid voter");
// } else {
//   console.log("you dont vote");
// }

// let price = 6000;
// let dis = 0;

// if (price >= 0 && price <= 5000) {
//   dis = 0;
// } else if (price >= 5001 && price <= 7000) {
//   dis = 0.05;
// } else if (price >= 7001 && price <= 9000) {
//   dis = 0.1;
// } else if (price > 9000) {
//   dis = 0.2;
// } else {
//   console.log("negative numbers");
// }
// console.log("payable amount:", price - price * dis);

let unit = 700;
let amount = 0;

if (unit > 400) {
  amount = (unit - 400) * 13;
  unit = 400;
}
if (unit > 200) {
  amount += (unit - 200) * 8;
  unit = 200;
}
if (unit > 100) {
  amount += (unit - 100) * 6;
  unit = 100;
}
amount += unit * 4;
console.log(amount);
