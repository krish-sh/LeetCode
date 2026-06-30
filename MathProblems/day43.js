// Recursive method to find GCD

// function gcd(a, b) {
//   if (b == 0) return a;
//   return gcd(b, a % b);
// }
// console.log(gcd(14,65));

// Iterative method to find GCD

let a = 14;
let b = 65;

while (b != 0) {
  let temp = b;
  b = a % b;
  a = temp;
}

console.log(a);
