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

let num = -123
let rev= 0


while(num !== 0){
    let digit = num % 10
    rev = rev * 10 + digit
    num = Math.trunc(num / 10)
} 

console.log(rev);


