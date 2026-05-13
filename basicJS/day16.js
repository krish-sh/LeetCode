let prompt = require("prompt-sync")();
let n = Number(prompt("enter a number:"));

// Base pattern

// for (let i = 1; i <= n; i++) {
//   for (let j = 1; j <= n; j++) {
//     process.stdout.write("*");
//   }
//   console.log();
// }

// Right angle traingle with star

// for (let i = 1; i <= n; i++) {
//   for (let j = 1; j <= i; j++) {
//     process.stdout.write("* ");
//   }
//   console.log();
// }

// Right angle traingle with numbers

// for (let i = 1; i <= n; i++) {
//   for (let j = 1; j <= i; j++) {
  
//     process.stdout.write(j + " ");
//   }
//   console.log();
// }

//  Right angle traingle with Alphabets

for (let i = 1; i <= n; i++) {
    let ascii= 65
  for (let j = 1; j <= i; j++) {
    process.stdout.write(String.fromCharCode(ascii) + " ");
    ascii++
  }
  console.log();
}