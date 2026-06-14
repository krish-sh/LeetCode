// prime number

let n = 0;
let isPrime = true;

// for (let i = 2; i <= Math.floor(primeNo / 2); i++) {
//   if (primeNo % i === 0) {
//     isPrime = false;
//     break;
//   }
// }

// if (isPrime && primeNo > 1) {
//   console.log("A PRIME NO");
// } else {
//   console.log("NOT A PRIME NO");
// }

function primeNo(n) {
  if (n <= 1) {
    console.log("NOT A PRIME NO");
    return;
  }

  if (n === 2) {
    console.log("A PRIME NO");
    return;
  }

  if (n % 2 === 0) {
    console.log("NOT A PRIME NO");
    return;
  }

  for (let i = 3; i <= Math.floor(Math.sqrt(n)); i += 2) {
    if (n % i === 0) {
      console.log("NOT A PRIME NO");
      return;
    }
  }

  console.log("A PRIME NO");
}

primeNo(127)