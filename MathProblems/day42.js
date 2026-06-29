// iterative HCF of two numbers and find the highest equal value.

let a = 30;
let b = 20;

// while (a != b) {
//   if (a > b) a = a - b;
//   else b = b - a;
// }

// console.log(a);

// Recursion of same ques

function gcd(a, b) {
    console.log(a, b);
    
  if (a == b) return a;

  if (a > b) return gcd(a - b, a);
  else return gcd(b - a, b);
}

console.log(gcd(a,b));
