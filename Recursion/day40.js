// Sum of n th number

// function sum(n) {
//   if (n == 1) return 1;
//   return n + sum(n - 1);
// }
// console.log(sum(5));

// sum of factorila

function fact(n){
    if(n== 1) return n
    return n * fact(n-1)
}

console.log(fact(5));
