// Count element greater than pervious Average

nums = [100, 200, 150, 300]

let sum = 0
let count = 0

for(let i= 1; i<nums.length; i++){
    sum += nums[i-1]
    let average = sum / i
    if(nums[i] > average){
        count++
    }
}

console.log(count);
