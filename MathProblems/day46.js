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

    if( n === 0) return 1
    let ans = temp(x,n)
    return (n < 0)? 1/ans : ans

    function p(x,n){
        if(n === 0) return 1
        let ans =  p(x, parseInt(n/2)) 
        if(n % 2 === 0) return ans * ans
        else return ans * ans * x
    }