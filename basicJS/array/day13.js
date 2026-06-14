// Sum of digits

let n = 145;
// let sum = 0
// while(n>0){
//     let rem = n % 10
//     sum += rem
//     n = Math.floor(n/10)
// }

//  Revese the number

// let rev = 0;
// while (n > 0) {
//   let rem = n % 10;
//   rev = rev * 10 + rem;
//   n = Math.floor(n / 10);
// }

// console.log(rev);

// strong number

let sum = 0;
const copy = n;
while (n > 0) {
  let rem = n % 10;
  let fact = 1;
  for (let i = 1; i <= rem; i++) {
    fact = fact * i;
  }
  sum += fact;
  n = Math.floor(n / 10);
}

if (copy === sum) {
  console.log("Strong number");
} else {
  console.log(sum);
}
