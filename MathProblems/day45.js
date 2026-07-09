// Factor

let n = 100

for(let i = 1; i <= Math.floor(Math.sqrt(n)); i++){
    if(n % i === 0){
        process.stdout.write(i + " ")
    }
}

for(let i = Math.floor(Math.sqrt(n)); i >= 1; i--){
    if(n % i === 0 && n / i != i){
        process.stdout.write(n / i + " ")
    }
}