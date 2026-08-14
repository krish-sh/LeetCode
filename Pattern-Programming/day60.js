// 1
// 0 1
// 1 0 1
// 0 1 0 1
// 1 0 1 0 1

let n = 5;

for (let i = 0; i < n; i++) {
  for (let j = 0; j <= i; j++) {
    if ((i + j) % 2 === 0) {
      // process.stdout.write("1 ");
    } else {
      // process.stdout.write("0 ");
    }
  }
  //   console.log(" ");
}

// 1             1
// 1 2         2 1
// 1 2 3     3 2 1
// 1 2 3 4 4 3 2 1

for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= i; j++) {
    // process.stdout.write(j + " ");
  }
  for (let k = 1; k <= (n - i) * 2; k++) {
    // process.stdout.write("  ");
  }
  for (let l = i; l >= 1; l--) {
    // process.stdout.write(l + " ");
  }
//   console.log("");
}

// 1
// 2 3 
// 4 5 6
// 7 8 9 10
// 11 12 13 14 15

let count = 1
for(let i= 1; i<=n; i++){
   let row = "" 
   for(let j = 1; j<=i; j++){
    row += count + " "
    count++
}
console.log(row);
    
}