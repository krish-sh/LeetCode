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

for(let i = 1; i <= no; i++){
    for(let j = 1; j <= i; j++){
        process.stdout.write(j + " ")
    }
    console.log(" ");
    
}
