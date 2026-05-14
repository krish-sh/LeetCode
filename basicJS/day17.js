// inverted right angle traingle
const prompt = require("prompt-sync")();

let n = prompt("Enter a number:");

// for (let i = 1; i <= n; i++) {
//   for (let j = n; j >=i; j--) {
//     process.stdout.write("*" + " ");
//   }
//   console.log();
// }

// mirror right angle traingle

// for (let i = 1; i <= n; i++) {
//   for (let j = 1; j <= n - i ; j++) {
//     process.stdout.write(" ");
//   }
//   for (let k = 1; k <= i; k++) {
//     process.stdout.write("*");
//   }
//   console.log();
// }

// making X

// for (let i = 1; i <= n; i++) {
//   for (let j = 1; j <= n; j++) {
//     if (i == j || i + j == n + 1) {
//       process.stdout.write("* ");
//     } else {
//       process.stdout.write("  ");
//     }
//   }

//   console.log();
// }

// V shape making

for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= (n * 2)-1; j++) {
    if (j == i || i + j == (n * 2) ) {
      process.stdout.write("*");
    }
    process.stdout.write(" ");
  }

  console.log();
}
