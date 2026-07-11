// let n = 30
// let prime= new Array(n+1).fill(true)

// for(let i = 2; i <= Math.floor(Math.sqrt(n)); i++){
//     if(prime[i]){
//         for(let j = i * i; j<= n; j+=i){
//             prime[j] = false
//         }
//     }
// }
// for(let i = 2; i <= n; i++){
//     if(prime[i]) process.stdout.write(i+" ")
// }

// power of n with x

let x = 2.00000
let n = 10

let ans = 1
let power = Math.abs(n)

while(power > 0){
    if(power % 2 === 1){
        ans *= x
    }
    x *= x

    power = Math.floor(power/ 2)
}

if (n  < 0 ) ans = 1/ans
console.log(ans);

    