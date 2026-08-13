// * * * * *
// * * * * *
// * * * * *
// * * * * *
// * * * * *

let no = 5;

for (let i = 1; i <= no; i++) {
  for (let j = 1; j <= no; j++) {
    // process.stdout.write("* ");
  }
  //   console.log(" ");
}

// *
// * *
// * * *
// * * * *
// * * * * *

for (let i = 1; i <= no; i++) {
  for (let j = 1; j <= i; j++) {
    // process.stdout.write("* ");
  }
  //   console.log(" ");
}

// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5

for (let i = 1; i <= no; i++) {
  for (let j = 1; j <= i; j++) {
    // process.stdout.write(j + " ")
  }
  // console.log(" ");
}

// 1
// 2 2
// 3 3 3
// 4 4 4 4
// 5 5 5 5 5

for (let i = 1; i <= no; i++) {
  for (let j = 1; j <= i; j++) {
    // process.stdout.write(i + " ")
  }
  // console.log(" ");
}

// * * * * *
// * * * *
// * * *
// * *
// *

for (let i = 1; i <= no; i++) {
  for (let j = no; j >= i; j--) {
    // process.stdout.write("* ")
  }
  // console.log(" ");
}

// 1 2 3 4 5
// 1 2 3 4
// 1 2 3
// 1 2
// 1

for (let i = 0; i < no; i++) {
  for (let j = 1; j <= no - i; j++) {
    // process.stdout.write(j + " ")
  }
  // console.log(" ");
}

//         *
//       * * *
//     * * * * *
//   * * * * * * *
// * * * * * * * * *

for (let i = 0; i < no; i++) {
  for (let j = 1; j <= no - i - 1; j++) {
    // process.stdout.write(" ");
  }
  for (let k = 1; k <= 2 * i + 1; k++) {
    // process.stdout.write("*");
  }
  //   console.log("");
}

// * * * * * * * * *
//   * * * * * * *
//     * * * * *
//       * * *
//         *

for (let i = 0; i < no; i++) {
  for (let j = 1; j <= i; j++) {
    // process.stdout.write(" ")
  }
  for (let k = 1; k <= 2 * no - (2 * i + 1); k++) {
    // process.stdout.write("*")
  }
  // console.log("");
}

//         *
//       * * *
//     * * * * *
//   * * * * * * *
// * * * * * * * * *
// * * * * * * * * *
//   * * * * * * *
//     * * * * *
//       * * *
//         *

for (let i = 0; i < no; i++) {
  for (let j = 1; j <= no - i - 1; j++) {
    // process.stdout.write(" ")
  }
  for (let k = 1; k <= 2 * i + 1; k++) {
    // process.stdout.write("*")
  }
  // console.log("");
}
for (let i = 0; i < no; i++) {
  for (let j = 1; j <= i; j++) {
    // process.stdout.write(" ")
  }
  for (let k = 1; k <= 2 * no - (2 * i + 1); k++) {
    // process.stdout.write("*")
  }
  // console.log("");
}

// *
// * *
// * * *
// * * * *
// * * * * *
// * * * *
// * * *
// * *
// *

for (let i = 0; i <= no; i++) {
  for (let j = 1; j <= i; j++) {
    process.stdout.write("* ");
  }
  console.log("");
}
for (let i = 1; i < no; i++) {
  for (j = 1; j <= no - i; j++) {
    process.stdout.write("* ");
  }
  console.log(""); 
}
