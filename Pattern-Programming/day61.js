// * * * * * * * * * *
// * * * *     * * * *
// * * *         * * *
// * *             * *
// *                 *
// *                 *
// * *             * *
// * * *         * * *
// * * * *     * * * *
// * * * * * * * * * *

let no = 5;

for (let i = 0; i < no; i++) {
  for (let j = 1; j <= no - i; j++) {
    // process.stdout.write("* ")
  }
  for (let k = 0; k < i; k++) {
    // process.stdout.write("  ");
  }
  for (let l = 0; l < i; l++) {
    // process.stdout.write("  ");
  }
  for (let m = 1; m <= no - i; m++) {
    // process.stdout.write("* ");
  }
  // console.log(" ");
}
for (let i = 0; i < no; i++) {
  for (let j = 0; j <= i; j++) {
    // process.stdout.write("* ");
  }
  for (let k = 0; k < no - i - 1; k++) {
    // process.stdout.write("  ");
  }
  for (let l = 0; l < no - i - 1; l++) {
    // process.stdout.write("  ");
  }
  for (let m = 0; m <= i; m++) {
    // process.stdout.write("* ");
  }
  // console.log(" ");
}

// *                 *
// * *             * *
// * * *         * * *
// * * * *     * * * *
// * * * * * * * * * *
// * * * *     * * * *
// * * *         * * *
// * *             * *
// *                 *

for (let i = 0; i < no; i++) {
  for (let j = 0; j <= i; j++) {
    // process.stdout.write("* ");
  }
  for (let k = 0; k < no - i - 1; k++) {
    // process.stdout.write("  ");
  }
  for (let l = 0; l < no - i - 1; l++) {
    // process.stdout.write("  ");
  }
  for (let m = 0; m <= i; m++) {
    // process.stdout.write("* ");
  }
//   console.log("");
}
for (let i = 0; i < no -1; i++) {
  for (let j = 0; j < no - i - 1; j++) {
    // process.stdout.write("* ");
  }
  for (let k = 0; k <= i; k++) {
    // process.stdout.write("  ");
  }
  for (let l = 0; l <= i; l++) {
    // process.stdout.write("  ");
  }
  for (let m = 0; m < no - i - 1; m++) {
    // process.stdout.write("* ");
  }
//   console.log("");
}

// * * * *
// *     *
// *     *
// * * * *

let n = 4

for(let i = 1; i <=n; i++){
    for(let j = 1; j <= n ; j++){
        if(i === 1 || i === n || j === 1 || j === n ){
            // process.stdout.write("* ")
        }else{
            // process.stdout.write("  ");
        }
    }
    // console.log(" ");
}
