// Count digits in a number
// let n = [1,2,3,4,5]

// let digit = 0
// for(let i = 0; i < n.length; i++){
//     digit += 1
// }
// console.log(digit);

// in String
// let N = "12345"
// count = Math.floor(Math.log10(N)+ 1)
// console.log(count);

// Reverse a Number

// let num = -123
// let rev= 0

// while(num !== 0){
//     let digit = num % 10
//     rev = rev * 10 + digit
//     num = Math.trunc(num / 10)
// }

// console.log(rev);

// palindrome number

// let x = -11211
// let rev = 0
// let palidndrome = false
// let no = x

// while(no > 0){
//     let digit = no % 10
//     rev = rev * 10 + digit
//     no = Math.floor(no / 10)
// }

// if(rev === x){
//     palidndrome = true
// }else{
//     palidndrome = false
// }
// console.log(palidndrome);

// GCD or HCF

// let n1 = 9;
// let n2 = 12;

// let min = Math.min(n1, n2);
// let gcd = 1;

// for (let i = 1; i <= min; i++) {

//   if (n1 % i === 0 &&  n2 % i === 0) {
//     gcd = i;
//   }
// }
// console.log(gcd);

// Print all Divisor of given number

// let no = 12

// for(let i = 1; i <= no; i++){
//     if(no % i === 0){
//         console.log(i);
//     }
// }

// console.log(Math.sqrt(no));

// Check Prime no

let n = 4;
let isPrime = true;
for (let i = 2; i <= Math.sqrt(n); i++) {
  if (n % i === 0) {
    isPrime = false;
    break;
  }
}
if (isPrime === true) {
  console.log("its  a prime no");
} else {
  console.log("its not a prime no");
}
