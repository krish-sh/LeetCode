// for loop
// Sum of natural number

// let sum = 0;

// for (let i = 1; i <= 10; i++) {
//   sum = sum + i;
// }
// console.log(sum);

// factors of number

let number = 36;

for (let i = 0; i < Math.floor(number / 2); i++) {
  if (number % i === 0) {
    console.log(i);
  }
}
console.log(number);
